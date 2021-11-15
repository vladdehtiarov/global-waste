<?php
define('TKM', true);
include 'system.php';
?>
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Global Waste</title>

    <link rel="stylesheet" href="css/style.min.css">

    <style>
        .input-phone:placeholder {
            letter-spacing: 0.03vw!important;
        }

    .alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
}
    .alert-warning {
        color:#856404;background-color:#fff3cd;border-color:#ffeeba
        margin-left: auto;
    margin-right: auto;
    width: 500px;
    }
    .alert-danger {
        color:#721c24;background-color:#f8d7da;border-color:#f5c6cb
        margin-left: auto;
    margin-right: auto;
    width: 500px;
    }
    .alert {
    margin-top: -50px;
    position: relative;
    padding: .75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}
    </style>

</head>

<body>



    <header class="header">

        <div class="container">

            <div class="menu">

                <nav class="menu--wrapper">

                    <ul class="menu--list">

                        <li class="menu--item"><a href="about.html" class="menu--link">About</a></li>

                        <li class="menu--item"><a href="contacts.html" class="menu--link">Contacts</a></li>

                    </ul>

                </nav>

            </div>

        </div>

    </header>



    <main class="main">

        <section class="global-waste">

            <div class="section-label">


                <h1 class="title">

                    Global waste collection organisation

                </h1>

                <p class="subitle">

                    26 Hatton Garden London EC1N 8BR

                </p>

            </div>



            <div class="global-waste--btn-wrapp">

                <a href="#" class="global-waste--btn" id="id-btn">

                    <span class="btn-title">enter with id</span>

                    <span class="btn-subtitle">phone number</span>

                </a>

                <a href="#" class="global-waste--btn" id="id-coordinates">

                    <span class="btn-title">Enter coordinates</span>

                    <span class="btn-subtitle">add phone number</span>

                </a>

            </div>

            

            <div class="map">

                <img src="images/map.svg" alt="map">

            </div>

        </section>

    </main>



    <div class="owerlay <?php if (isset($_GET['error'])) { } else { echo 'hide'; } ?>"></div>

    <div class="modal hide">

        <form class="form formone" method="POST" id="formuler">

            <label>

                <p class="input-label">Enter Google Maps GPS coordinates</p>

                <input class="form--input" id="input-coordinate" name="coordinates" type="text" placeholder="00.0000000, 00.0000000" required>

            </label>

            <label>

                <p class="input-label">Enter phone number that also will be your ID</p>

                <!-- <input class="form--input input-phone" id="input-phone" name="id" type="text" onkeyup="this.value = this.value.replace(/[^\d]/g,'');" placeholder="+  ___ _________" required> -->
                <input maxlength="14" style="letter-spacing: 0.03vw;" class="form--input input-phone" id="input-phone" name="id" type="text" placeholder="+  ___ _________" required>


            </label>

            <button class="send-form" type="submit">send</button>

        </form>

    </div>

    <div class="modal modal-phone <?php if (isset($_GET['error'])) { } else { echo 'hide'; } ?>">

        <form class="form" method="POST" action="conditions.php">

            <label>

                <p class="input-label">Enter your ID, please, phone number</p>

                <input maxlength="14" style="letter-spacing: 0.03vw;" class="form--input input-phone" id="input-phone-id" type="text" name="id" placeholder="+  ___ _________">

            </label>

            <button class="send-id">send</button>

        </form>

    </div>

    <script src="https://unpkg.com/imask"></script>

    <script src="js/main.min.js?v=70"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <script>
    $(function(){
        $("#alert").delay(5000).slideUp(300);
    });
    </script>
    <script>
        function falseValue(elem) {

        elem.classList.add('false-value');

        elem.placeholder = 'Not correct entry';

        setTimeout(ret, 1500);

        function ret() {

        elem.classList.remove('false-value');

        elem.placeholder = '+  ___ _________';
                            
        }

        }
    </script>
    <?php if(isset($_GET['error'])) { ?>
        <script>
            falseValue(phoneIdInp);
        </script>
        <?php } ?>

    <script>
    $(function(){
        $("#ider").delay(5000).slideUp(300);
    });
    </script>

    <script>
		$(document).ready(function () {
    $(".formone").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: '/post.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Send...</p>');

            },
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html('<p style="text-align:center">'+data+'</p>');
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});
</script>
<script src="js/inputmask.min.js"></script>
<script>
    // Phone mask

    // let selector = document.querySelector('#input-phone-id');

    //     let im = new Inputmask("+  999 999999999");                                                     
    //     im.mask(selector);

    let s = document.querySelectorAll('.input-phone');
    s.forEach(i => {
        // let im = new Inputmask("+  999 999999999");  
        // im.mask(i);
    });

    
</script>

</body>

</html>