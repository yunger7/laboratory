<?php
include('conecta.php');

$nome = $_POST['nome'];
$email = $_POST['email'];
$endereco = $_POST['endereco'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$celular = $_POST['celular'];
$dataNascimento = $_POST['data-nascimento'];
$profissao = $_POST['profissao'];
$tipo = $_POST['tipo'];

$sql = "INSERT INTO pessoa (tipo, nome, endereco, cidade, estado, celular, email, datanascimento, profissao) VALUES ('$tipo', '$nome', '$endereco', '$cidade', '$estado', '$celular', '$email', '$dataNascimento', '$profissao')";

if(mysqli_query($conn, $sql)){
  mysqli_close($conn);
  echo "
    <script language='javascript' type='text/javascript'>
      alert('Pessoa cadastrada com sucesso!');
      window.location.href = '../pessoas.php';
    </script>
  ";
} else {
  mysqli_close($conn);
  echo "
    <script language='javascript' type='text/javascript'>
      alert('Houve um problema ao cadastrar a pessoa');
      window.location.href = '../cadastrar-pessoas.php';
    </script>
  ";
}

?>