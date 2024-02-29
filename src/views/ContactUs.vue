<template >
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <body>
    <section class="big-container">
        <div class="container">
            <h2>Restiamo in Contatto!</h2>
            <form action="process.php" method="post">
                <div class="form-group">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Messaggio:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Invia</button>
            </form>
<div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="contact-info">
                <div class="random-info">
                    <h3><i class="fa-solid fa-location-dot"></i></h3>
                    <p>Via Roma, 5</p>
                    <p>Roma, RM, 00185</p>

                </div>
                <div class="random-info">
                    <h3><i class="fa-solid fa-phone"></i></h3>
                    <p> +39 345 678 8998</p>
                    <p> +39 06 634 78998</p>
                </div>
                <div class="random-info">
                    <h3><i class="fa-solid fa-globe"></i></h3>
                    <p><a href=" topcocktailsbar@gmail.com"> topcocktailsbar@gmail.com</a></p>
                    <p> <a href=" https://bestcocktailintwon.com%22%3E/ https://bestcocktailintwon.com/" ></a>
                    </p>


                </div>
            </div>
        </div>
    </section>
</body>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    ;
}

.big-container {
    display: flex;
    justify-content: center;
}

.container {
    width: 50%;
    height: 850px;
    background-color: #fff;
    padding: 20px;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
}

h2 {
    text-align: center;
    color: #2c2c2c;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

textarea {
    resize: vertical;
}

button {
    padding: 10px 20px;
    background-color: #2c2c2c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #7b7b7b;
}

.social-icons {
    text-align: center;
    margin-top: 20px;
}

.social-icon {
    display: inline-block;
    margin-right: 10px;
    font-size: 24px;
    color: #2c2c2c;
    transition: color 0.3s;
}

.social-icon:hover {
    color: #7b7b7b;
}

.contact-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
}

.random-info {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.random-info h3 {
    margin-top: 0;
}

.random-info p {
    margin: 0;
}

h3 {
    display: flex;
    justify-content: center;
}

div.random-info p {
    display: flex;
    justify-content: center;
}
</style>