function label_create(tag_name, attr_name, attr_value, content) {
  var ele = document.createElement(tag_name);
  ele.setAttribute(attr_name, attr_value);
  ele.innerHTML = content;
  return ele;
  
}

function break_create() {
  var label_break = document.createElement("br");
  return label_break;
}

function input_create(tag_name, attr_name, attr_value, attr_name1, attr_value1) {
  var input_ele = document.createElement(tag_name);
  input_ele.setAttribute(attr_name, attr_value);
  input_ele.setAttribute(attr_name1, attr_value1);
  return input_ele;
}


var email = label_create("label", "for", "email", "Email");
var email_break = break_create();
var input_email = input_create("input", "type", "email", "id", "email");

document.body.append(email, email_break, input_email);

var first_name = label_create("label", "for", "first_name", "First Name");
var first_name_break = break_create();
var first_name_input = input_create("input", "type", "text", "id", "first_name");

document.body.append(break_create());
document.body.append(break_create());

document.body.append(first_name, first_name_break, first_name_input);

var middle_name = label_create("label", "for", "middle_name", "Middle Name");
var middle_name_break = break_create();
var middle_name_input = input_create("input", "type", "text", "id", "middle_name");

document.body.append(break_create());
document.body.append(break_create());


document.body.append(middle_name, middle_name_break, middle_name_input);

var last_name = label_create("label", "for", "last_name", "Last Name");
var last_name_break = break_create();
var last_name_input = input_create("input", "type", "text", "id", "last_name");

document.body.append(break_create());
document.body.append(break_create());

document.body.append(last_name, last_name_break, last_name_input);


var password = label_create("label", "for", "password", "password");
var password_break = break_create();
var password_input = input_create("input", "type", "password", "id", "password");

document.body.append(break_create());
document.body.append(break_create());

document.body.append(password, password_break, password_input);


var file = label_create("label", "for", "file", "File");
var file_break = break_create();
var file_input = input_create("input", "type", "file", "id", "file");

document.body.append(break_create());
document.body.append(break_create());

document.body.append(file, file_break, file_input);