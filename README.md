# web_development
This is a course note for Udemy Web Development bootcamp. 


# Intermediate HTML
Hard points
1. How to make a table in HTML?
use table tag, thead to show table head, tr tag(tr is to add a new row), th is to add a new head column, tb is to add a new body item. Example code shown below. 

<table border="1">
<thead> <!-- in HTML5 -->
	<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Breed</th>
	</tr>
</thead>

<tbody>
	<tr>
		<td>Rusty</td>
		<td>2</td>
		<td>Mutt</td>

	</tr>
	<tr>
		<td>Wyatt</td>
		<td>13</td>
		<td>Golden</td>
	</tr>
</tbody>
</table>


2. How to make a form in HTML

1. two methods to label elements:
 a. call id 
 <label for="id">Label_title</label>
 <input type="input_type" name="element_name" id="unique_ID_for_element" placeholder="default value" required(if this field is required)>
 
 b.no need to call id 
 <label>
  label_name:
    <input type="" name="" value="">
  </label>
 
2. input validation 
  required field, need to add "required" Syntax to the element <>
  password, input type should be password, if asking for only 5-10 characters, you need to add syntax like below
  <input type="password" name="password" id="password" pattern=".{5,10}" placeholder="your password"  title="5 to 10 characters">
  email, input type should be set email
 
example:

<!DOCTYPE html>
<html>
<head>
	<title>register form</title>
</head>
<body>

<h1>Register</h1>

<form>
	<div>
		<label for="firstname">First Name:</label>	
		<input type="text" name="first_name" id="firstname" placeholder="John" required>

		<label for="lastname">Last Name:</label>
		<input type="text" id="lastname" placeholder="Smith" required>
	</div>
  
  <div>
    <label for="male">Male:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="female">Female:</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="other">Other:</label>
    <input type="radio" id="other" name="gender" value="other">
  </div>

  <div>
    <label for id="email">Email:</label>
    <input type="Email" id="email" required placeholder="your email">

    <label for id="password">Password:</label>
    <input type="password" name="password" id="password" pattern=".{5,10}" placeholder="your password" required title="5 to 10      characters">
  </div>
  
<div>
   <label>Birthday:
    <SELECT name="month">
      <option value="0" selected disabled>Month</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </SELECT>

    <SELECT name="days">
      <option value="0" selected disabled>Days</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </SELECT>

    <SELECT name="Year">
      <option value="0" selected disabled>Year</option>
      <option value="1989">1989</option>
      <option value="1990">1990</option>
    </SELECT>
  </label>
</div>

<br>
<label for="box">I agree to the terms and conditions</label>
<input type="checkbox" name="checkbox" id="box">

<div>
<button>Submit</button>
</div>

</form>
</body>
</html>

