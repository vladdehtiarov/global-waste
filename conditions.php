<?php
define("TKM", true);
include 'system.php';
if(isset($_POST['id'])) {
$id = str_replace("+", "", $_POST['id']);
$a = $link->query("SELECT count(*) FROM `AD_POLE` WHERE `id` = '".$id."'");
$b = $a->fetch();
if($b['count(*)'] == 0) {
    MessageSend(3, '', '/?error=user');
}
$sth = $link->prepare("SELECT * FROM `AD_POLE` WHERE `id` = ?");
$sth->execute(array($id));
$row = $sth->fetch();
if(empty($row['id'])) {
    $rowid = 'ID not found';
} else {
    $rowid = $row['id'];
}
if(empty($row['points'])) {
    $points = '0';
} else {
    $points = $row['points'];
}
if(empty($row['cord'])) {
    $coordinates = 'ID not found';
} else {
    $coordinates = $row['cord'];
}
}
if (!empty($row['id'])) {
?>
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Global Waste</title>

    <link rel="stylesheet" href="css/style.min.css">

</head>

<body>



    <header class="header">

        <div class="header__inner">

            <div class="header__back-btn">

                <a href="index.php">

                    <img src="../images/back.svg" alt="<">

                </a>

            </div>

            <div class="header__id">

                <span id="conditions-id">ID: <?php echo $rowid; ?></span>

                <span>points: <?php echo $points; ?></span>

            </div>

        </div>

    </header>



    <main class="main">

        <section class="conditions">

            <div class="conditions__inner">

                <div class="conditions__container">

                    <div class="conditions__buttons">

                        <a href="#" class="conditions-btn conditions-btn_active" id="conditions-btn">

                            conditions

                            <div class="conditions-btn__underline"></div>

                        </a>

                        <a href="#" class="conditions-btn" id="rewards-btn">

                            rewards

                            <div class="conditions-btn__underline"></div>

                        </a>

                    </div>



                    <div class="conditions__content">

                        <div class="conditions__text">

                            <p>

                                Our goal is to clean ground and consequently

                                the ocean from different kinds of waste that

                                lies in the forests, cities and towns streets,

                                fields and parks, and every other places.

                            </p>

                            <p>

                                We organise groups of ten people for collecting waste

                                in a bag for 10 kg,  each of member group it has suggested

                                to collect as many bags as it possible.

                            </p>

                            <p>

                                Every bag - 100 points for Reward. We very glad to see you have

                                passion to  do   something good for planet

                            </p>

                        </div>

                        <div class="conditions__form">

                            <form class="form formone" method="POST" id="formuler">

                                <label>

                                    <p class="input-label">

                                        Add another coordinate and get new invitation in other place

                                    </p>

                                    <input type="hidden" name="id" value="<?php echo $rowid; ?>">
                                    <input class="form--input" name="coordinates" id="coditions-input" value="" type="text">

                                </label>

                                <button type="submit" id="coditions-btn">Send</button>

                            </form>

                        </div>

                    </div>



                    <div class="reward__content hide">

                        <div class="reward-title">Reward List</div>

                        <ul class="reward-list">

                            <li class="reward-item">1. Text 1 (Receive QR code)</li>

                            <li class="reward-item">2. Text 2 (Receive QR code)</li>

                            <li class="reward-item">3. Text 3 (Receive name.txt)</li>

                            <li class="reward-item">4. Text 4 (Receive name.txt)</li>

                        </ul>

                        <div class="reward-points">

                            <span>Points:</span>

                            <?php echo $points; ?>

                        </div>

                    </div>

                    

                </div>                

            </div>

        </section>

    </main>



    <div class="modal conditions-modal hide">

        <a class="modal--close">

            <img src="../images/close.svg" alt="x">

        </a>

        <p>

            We have received your preferences of the area,

            and will invite you by phone messenger.

        </p>

    </div>



    <script src="js/main.min.js?v=52"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <script>
        $(document).ready(function () {
    $(".formone").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: '/postcoo.php',
            data: formNm.serialize()
        });
        return false;
    });
});
</script>

</body>

</html>
<?php } else {
    MessageSend(1, 'Your ID was not found, register in the system', '/');
} ?>