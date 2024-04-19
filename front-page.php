<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <video class="video" autoplay loop muted>
            <source src="<?php echo get_stylesheet_directory_uri() . '/assets/media/video_hero.mp4'; ?>">
        </video>
        <img class="text-banner" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>
        <script> data-0="transform:translateY(0px)" data-806="transform:translateY(450px)"
            var s = skrollr.init();
        </script> -->
    </section>
    <section id="story" class="story">
        <h2><span class="title_up">L'histoire</span></h2>
        <article class="story__article">
            <p class="story__article--text"><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
        $args = array(
            'post_type' => 'characters',
            'posts_per_page' => -1,
            'meta_key'  => '_main_char_field',
            'orderby'   => 'meta_value_num',

        );
        $characters_query = new WP_Query($args);
        ?>
        <article id="characters">
            <h3><span class="title_up">Les personnages</span></h3>
            <div class="main-character">
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <?php

                        if ($characters_query->have_posts()) : while ($characters_query->have_posts()) : $characters_query->the_post(); ?>

                                <div class="swiper-slide">
                                    <?php the_post_thumbnail(); ?>
                                    <h4>
                                        <?php the_title(); ?>
                                    </h4>
                                </div>

                        <?php endwhile;
                        endif;

                        wp_reset_postdata();
                        ?>
                    </div>
                </div>
            </div>
        </article>

        <article id="place" style="background: url(<?php echo get_theme_file_uri('/assets/images/image_place.png'); ?>); background-position: center; background-repeat: no-repeat">
            <div>
                <div class="cloud">
                    <img class="big-cloud blur" src="<?php echo get_theme_file_uri('/assets/images/big_cloud.png'); ?>)">
                    <img class="little-cloud blur" src="<?php echo get_theme_file_uri('/assets/images/little_cloud.png'); ?>)">
                </div>
                <h3><span class="title_up">Le Lieu</span></h3>
                <p> <?php echo get_theme_mod('place'); ?> </p>
            </div>

        </article>
    </section>


    <section id="studio">
        <div>
        </div>
        <h2><span class="title_up">Studio </span><span class="title_up--second">Koukaki</span></h2>
        <div>
            <p> Acteur majeur de l’ animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes.Nous avons deux sections en activité: le long métrage et le court métrage.Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon. </p>
            <p> Avec une créativité et une capacité d’ innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance.Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques.Cette année, il vous présente“ Fleurs d’ oranger et chats errants”. </p>
        </div>
    </section>

    <?php get_template_part('partials/content', 'oscars'); ?>

</main><!-- #main -->

<?php
get_footer();
