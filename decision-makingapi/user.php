<?php
class User{
// dbection
private $db;
// Table
private $db_table = "user";
// Columns
public $id;
public $proect_name;
public $email;
public $position;
public $testing_technique;
public $tools_name;
public $project_result;
public $result;


// Db dbection
public function __construct($db){
$this->db = $db;
}

// GET ALL
public function getUsers(){
$sqlQuery = "SELECT id, project_name, email, position, testing_technique, tools_name, project_result, created FROM " . $this->db_table . "";
$this->result = $this->db->query($sqlQuery);
return $this->result;
}

// CREATE
public function createUser(){
// sanitize
$this->project_name=htmlspecialchars(strip_tags($this->project_name));
$this->email=htmlspecialchars(strip_tags($this->email));
$this->posiiton=htmlspecialchars(strip_tags($this->position));
$this->testing_technique=htmlspecialchars(strip_tags($this->testing_technique));
$this->tools_name=htmlspecialchars(strip_tags($this->tools_name));
$this->project_result=htmlspecialchars(strip_tags($this->project_result));
$this->created=htmlspecialchars(strip_tags($this->created));
$sqlQuery = "INSERT INTO
". $this->db_table ." SET project_name = '".$this->project_name."',
email = '".$this->email."',
position = '".$this->position."',
testing_technique = '".$this->testing_technique."',
tools_name = '".$this->tools_name."',
project_result = '".$this->project_result."',
created = '".$this->created."'";
$this->db->query($sqlQuery);
if($this->db->affected_rows > 0){
return true;
}
return false;
}

// UPDATE
public function getSingleUser(){
$sqlQuery = "SELECT id, project_name, email, position, testing_technique, tools_name, project_result, created FROM
". $this->db_table ." WHERE id = ".$this->id;
$record = $this->db->query($sqlQuery);
$dataRow=$record->fetch_assoc();
$this->project_name = $dataRow['project_name'];
$this->email = $dataRow['email'];
$this->position = $dataRow['position'];
$this->testing_technique = $dataRow['testing_technique'];
$this->tools_name = $dataRow['tools_name'];
$this->project_result = $dataRow['project_result'];
$this->created = $dataRow['created'];
}

// UPDATE
public function updateUser(){
$this->project_name=htmlspecialchars(strip_tags($this->project_name));
$this->email=htmlspecialchars(strip_tags($this->email));
$this->posiiton=htmlspecialchars(strip_tags($this->position));
$this->testing_technique=htmlspecialchars(strip_tags($this->testing_technique));
$this->tools_name=htmlspecialchars(strip_tags($this->tools_name));
$this->project_result=htmlspecialchars(strip_tags($this->project_result));
$this->created=htmlspecialchars(strip_tags($this->created));
$this->id=htmlspecialchars(strip_tags($this->id));

$sqlQuery = "UPDATE ". $this->db_table ." SET project_name = '".$this->project_name."',
email = '".$this->email."',
position = '".$this->position."',
testing_technique = '".$this->testing_technique."',
tools_name = '".$this->tools_name."',
project_result = '".$this->project_result."',
created = '".$this->created."'
WHERE id = ".$this->id;

$this->db->query($sqlQuery);
if($this->db->affected_rows > 0){
return true;
}
return false;
}

// DELETE
function deleteUser(){
$sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ".$this->id;
$this->db->query($sqlQuery);
if($this->db->affected_rows > 0){
return true;
}
return false;
}
}
?>