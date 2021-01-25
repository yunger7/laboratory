<?php
// classes

class User {
  public $email;
  public $name;

  public function __construct($name, $email){
    // $this->email = 'shiina@gmail.com';
    // $this->name = 'shiina';
    $this->email = $email;
    $this->name = $name;
  }

  public function login(){
    // echo 'The user logged in';
    echo $this->name . ' logged in';
  }
}

// $userOne = new User();

// $userOne->login();
// echo $userOne->name;

$userTwo = new User('Horo', 'horo@gmail.com');
// echo $userTwo->name;
// echo $userTwo->email;

$userTwo->login();

?>