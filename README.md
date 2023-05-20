# 0-100Days-Challenge
1)LOGIN FORM (HTML)
<!DOCTYPE html>
<html>
<head>
  <title>Admission Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-image: url("75d42796e65f781df7800cfd308f8d83.jpg");
      background-color: #cccccc; 
      height: 500px; 
     background-position: center;
     background-repeat: no-repeat; 
     background-size: cover; 

    }
    
    .container {
      max-width: 400px;
      margin: 0 auto;
      position: absolute;
      padding: 20px;
      height: auto;
      background-color: #ba3509;
      border: 5px solid #131212;
      border-radius: 5px;
    }
    
    h1 {
      text-align: center;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 4px;
      font-weight: bold;
    }
    
    .form-group input {
      width: 60%;
      padding: 10px;
      border: 2px solid #f00909;
      border-radius: 5px;
    }
    
    .form-group select {
      width: 100%;
      padding: 10px;
      border: 2px solid #6b1616;
      border-radius: 5px;
    }
    
    .form-group textarea {
      width: 50%;
      padding: 10px;
      border: 1px solid #dddddd;
      border-radius: 5px;
    }
    
    .form-group button {
      padding: 10px 20px;
      background-color: #f70505;
      border: none;
      color: #ffffff;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Admission Form</h1>
    <form>
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label for="program">Program of Interest:</label>
        <select id="program" name="program" required>
          <option value="">-- Select Program --</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Engineering">Engineering</option>
        </select>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</body>
</html>
