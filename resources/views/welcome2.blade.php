<!DOCTYPE html>
<html lang="en"> 
<head>
    <title>DevBook</title>
    
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Bootstrap 4 Book/eBook Landing Page Template For Developers">
    <meta name="author" content="Xiaoying Riley at 3rd Wave Media">    
    <link rel="shortcut icon" href="favicon.ico"> 
    
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Quicksand:700|Roboto:400,400i,700&display=swap" rel="stylesheet">
    
    <!-- FontAwesome JS-->
    <script defer src="assets/fontawesome/js/all.min.js"></script>

    <!-- Theme CSS -->  
    <link id="theme-style" rel="stylesheet" href="assets/css/theme.css">

</head> 

<body>    
    <header class="container">	    
        <div class="branding">
            <div class="container-fluid position-relative py-3">
				<div class="row">
					<div class="logo-wrapper col-lg-6">
						<div class="site-logo"><a class="navbar-brand" href="{{url('/')}}"><img class="logo-icon mr-2" src="assets/images/site-logo.svg" alt="logo" ><span class="logo-text">DevBook</span></a></div>    
					</div><!--//docs-logo-wrapper-->

					
					<div class="col-lg-6 text-right">
						@guest()
						<a href="{{route('login')}}">Login</a> ||
						<a href="{{route('register')}}">Register</a>
						@endguest
						@auth()
						<a href="{{route('home')}}" style="font-size: 16px;">Dashboard</a> 
						@endguest
					</div>
						
				</div>
            </div><!--//container-->
            
        </div><!--//branding-->
    </header><!--//header-->
    
    <section class="hero-section">
	    <div class="container">
		    <div class="row">
			    <div class="col-12 col-md-7 pt-5 mb-5 align-self-center">
				    <div class="promo pr-md-3 pr-lg-5">
					    <h1 class="headline mb-3">
						     Book &amp; eBook <br>El Puente   
					    </h1><!--//headline-->
					    <div class="subheadline mb-4">
						    Mentalidad del desarrollo con estilo. Download now and start selling your book right away!
						    
					    </div><!--//subheading-->
					    
					    <div class="cta-holder">
						    <a class="btn btn-primary mr-lg-2" href="{{url('home/buy')}}">COP $200.000</a>
						    
					    </div><!--//cta-holder-->
					    
					    <div class="hero-quotes mt-5">
						    <div id="quotes-carousel" class="quotes-carousel carousel slide carousel-fade mb-5" data-ride="carousel" data-interval="8000">
								<ol class="carousel-indicators">
									<li data-target="#quotes-carousel" data-slide-to="0" class="active"></li>
									<li data-target="#quotes-carousel" data-slide-to="1"></li>
									<li data-target="#quotes-carousel" data-slide-to="2"></li>
								</ol>
							  
							    <div class="carousel-inner">
								    <div class="carousel-item active">
								        <blockquote class="quote p-4 theme-bg-light">
									        "Excellent Book! Add your book reviews here consectetur adipiscing elit. Aliquam euismod nunc porta urna facilisis tempor. Praesent mauris neque, viverra quis erat vitae, auctor imperdiet nisi."     
								        </blockquote><!--//item-->
								        <div class="source media flex-column flex-md-row align-items-center">
									        <img class="source-profile mr-md-3" src="assets/images/profiles/profile-1.jpeg" alt="image" >
									        <div class="source-info media-body text-center text-md-left">
										        <div class="source-name">John Jairo González</div>
										        <div class="soure-title">Systems Engineer - Web Development</div>
										    </div>
								        </div><!--//source-->
								    </div><!--//carousel-item-->
								    <div class="carousel-item">
								        <blockquote class="quote p-4 theme-bg-light">
									        "Highly recommended consectetur adipiscing elit. Proin et auctor dolor, sed venenatis massa. Vestibulum ullamcorper lobortis nisi non placerat praesent mauris neque"     
								        </blockquote><!--//item-->
								        <div class="source media flex-column flex-md-row align-items-center">
									        <img class="source-profile mr-md-3" src="assets/images/profiles/profile-2.png" alt="image" >
									        <div class="source-info media-body text-center text-md-left">
										        <div class="source-name">Jean Doe</div>
										        <div class="soure-title">Senior Developer, Ipsum Company</div>
										    </div>
								        </div><!--//source-->
								    </div><!--//carousel-item-->
								    <div class="carousel-item">
								        <blockquote class="quote p-4 theme-bg-light">
									        "Awesome! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nunc porta urna facilisis tempor. Praesent mauris neque, viverra quis erat vitae."     
								        </blockquote><!--//item-->
								        <div class="source media flex-column flex-md-row align-items-center">
									        <img class="source-profile mr-md-3" src="assets/images/profiles/profile-3.png" alt="image" >
									        <div class="source-info media-body text-center text-md-left">
										        <div class="source-name">Andy Doe</div>
										        <div class="soure-title">Frontend Developer, Company Lorem</div>
										    </div>
								        </div><!--//source-->
								    </div><!--//carousel-item-->
								</div><!--//carousel-inner-->
							</div><!--//quotes-carousel-->
							
					    </div><!--//hero-quotes-->
				    </div><!--//promo-->
			    </div><!--col-->
			    <div class="col-12 col-md-5 mb-5 align-self-center">
				    <div class="book-cover-holder">
					    <img class="img-fluid book-cover" src="assets/images/devbook-cover.png" alt="book cover" >
					    <div class="book-badge d-inline-block shadow">
						    New<br>Release
					    </div>
				    </div><!--//book-cover-holder-->
			    </div><!--col-->
		    </div><!--//row-->
	    </div><!--//container-->
    </section><!--//hero-section-->
    
    
    
   
 
    
    
    

    <footer class="footer">

	    <div class="footer-bottom text-center py-5">

	        <!--/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) */-->
            <small class="copyright">Diseñado con <i class="fas fa-heart" style="color: #fb866a;"></i> para <a class="theme-link" href="https://www.evertecinc.com/" target="_blank">evertec</a> for johnsinapsis</small>
 
	    </div>
	    
    </footer>
       
    <!-- Javascript -->          
    <script src="assets/plugins/jquery-3.4.1.min.js"></script>
    <script src="assets/plugins/popper.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>  
    <script src="assets/plugins/jquery.scrollTo.min.js"></script>  
    <script src="assets/plugins/back-to-top.js"></script>  
    
    <script src="assets/js/main.js"></script>

</body>
</html> 

