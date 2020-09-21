<?php

// file system - part 1

// $lorem = readfile('readme.txt');
// echo $lorem;

$file = 'readme.txt';

// check if file exists
if(file_exists($file)){

  // read file
  echo readfile($file) . '<br/>';

  // copy file
  copy($file, 'lorem.txt');

  // find absolute path
  echo realpath($file) . '<br/>';

  // file size
  echo filesize($file) . '<br/>';

  // rename file
  rename($file, 'test.txt');
} else {
  echo 'File does not exist';
}

// create directory
mkdir('text documents');

?>