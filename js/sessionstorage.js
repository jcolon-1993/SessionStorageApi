<!DOCTYPE html>
<html>
  <head>
    <title>Session Storage</title>
    <link rel="stylesheet" href="css/styles.css" type="text/css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <header>
      <h1>THE MAKER BUS</h1>
    </header>
    <h2>What would you like to make?</h2>
    <div class="third">
      <img src="img/toys1.jpg" alt="Circuit boards">
    </div>
    <div class="two-thirds">
      <form id="application">
        <label for="username">Name</label>
        <input type="text" id="username" name="username" autocomplete="off">
        <br>
        <label for="answer">Answer</label>
        <textarea id="answer" name="answer"></textarea>
        <input type="submit" value="save">
      </form>
    </div>
    <script src="js/sessionstorage.js"></script>
  </body>
</html>
