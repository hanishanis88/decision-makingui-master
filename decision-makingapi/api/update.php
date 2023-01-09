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
$item->project_name = $_GET['project_name'];
$item->email = $_GET['email'];
$item->position = $_GET['position'];
$item->testing_technique = $_GET['testing_technique'];
$item->tools_name = $_GET['tools_name'];
$item->project_result = $_GET['project_result'];
$item->created = date('Y-m-d H:i:s');
if($item->updateUser()){
echo json_encode("User data updated.");
} else{
echo json_encode("Data could not be updated");
}
?>