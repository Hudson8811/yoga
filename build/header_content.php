<?php
//Navigator class
$css_classes[] = 'fl-page-heading';
$title_css_class = '';
//Save
$header_bg = $pre_title = $mask_html = $decor_html_img = $description='';


// Blog page Title
//Nav style
$custom_style_navigator = liarch_get_theme_mod('navigator_style');

// Blog page
if (liarch_is_blog_checker()) {
    $title = liarch_get_theme_mod('blog_title');

}
if (is_page()) {
    $title = get_the_title();
    if(liarch_get_theme_mod('page_heading_custom', true) == true){
        if(liarch_get_theme_mod('page_heading_disable', true) == 'disable'){
            $title = '';
        }
    }
}


// Single post
if(is_single()){
    $title = liarch_get_theme_mod('blog_single_title');
    $title_css_class = ' post-page__heading';
}
if(is_singular('works')){
    $title = '';
}

// 404
if(is_404()){
    $title = '';
}

$relative_main = '';
$container_class = '';

if($custom_style_navigator == 'six'){
    $relative_main .= 'relative_main';
    if($theme_dark == 'enable'){
        $relative_main .= ' left_menu_dark';
    }
} elseif($custom_style_navigator == 'three') {
    $relative_main .= 'relative_main';
} elseif($custom_style_navigator == 'two') {
    $relative_main .= 'relative_main';
} elseif($custom_style_navigator == 'one') {
    $relative_main .= 'relative_main';
} else {
    $container_class .= 'container';
}


$css_class = preg_replace( '/\s+/', ' ', implode( ' ', array_filter( array_unique( $css_classes ) ) ) );

?>
<?php if (isset($title) && $title != '') { ?>
    <div class="<?php echo esc_attr($css_class) ; ?> <?php echo esc_attr($relative_main, 'liarch');?>" >
        <div class="fl--page-header content_header container">
            <?php if (isset($title) && $title != '') { ?>
                <h1 class="default_heading <?php echo esc_attr($title_css_class, 'liarch');?>">
                    <?php echo esc_attr($title); ?>
                </h1>
            <?php } ?>
            <?php if (isset($pre_title) && $pre_title != '') { ?>
                <h2 class="default_pre_heading">
                    <?php echo esc_attr($pre_title); ?>
                </h2>
            <?php } ?>
        </div>
    </div>
<?php } ?>



