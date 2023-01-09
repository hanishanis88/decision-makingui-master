<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once '../database.php';
include_once '../user.php';
$database = new Database();
$db = $database->getConnection();
$item = new User($db);
$item->id = isset($_GET['id']) ? $_GET['id'] : die();
$item->getSingleUser();
if($item->project_name != null){

// create array
$emp_arr = array(
"id" => $item->id,
"project_name" => $item->project_name,
"email" => $item->email,
"position" => $item->position,
"testing_technique" => $item->testing_technique,
"tools_name" => $item->tools_name,
"project_result" => $item->project_result,
"created" => $item->created
);

http_response_code(200);
echo json_encode($emp_arr);
}
else{
http_response_code(404);
echo json_encode("User not found.");
}
?>