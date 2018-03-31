if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  cat >> index.html <<EOF
  <!DOCTYPE>
  <title>Hello</title>
  <h1>Hi</h1>
EOF
  cat >> css/style.css <<EOF
  h1{color: red;}
EOF
  cat >> js/main.js <<EOF
  var string = ”Hello World”
  alert(string)
EOF
  echo 'success'
  exit
fi