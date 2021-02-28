<?php
// FILE SYSTEM - PART 2
$file = 'lorem.txt';

// opening a file for reading
$handle = fopen($file, 'r+');

// read the file
echo fread($handle, filesize($file));

// read a single line
echo fgets($handle);
echo fgets($handle);

// read a single character
echo fgetc($handle);
echo fgetc($handle);

// writing to a file
fwrite($handle, "\n'You don't have to be great to start, but you have to start to be great' -Zig Ziglar");

// close the file
fclose($handle);

// delete the file
unlink($file);

?>