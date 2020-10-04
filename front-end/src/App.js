import React from 'react';

function App() {
  return (
    <div className="App">
      <head>
    <meta charset="utf-8">
    <title>Product List</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
  	<link href="css/style.css" rel="stylesheet">
		<link href="./App.css" rel="stylesheet">
	</head>
  <body>

    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div>
				<h2>
					Product List
				</h2>
			</div>

			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="navbar-toggler-icon"></span>
				</button> <a class="navbar-brand" href="#">Brand</a>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="navbar-nav">
						<li class="nav-item active">
							 <a class="nav-link" href="#">Link <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							 <a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							 <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								 <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
								<div class="dropdown-divider">
								</div> <a class="dropdown-item" href="#">Separated link</a>
							</div>
						</li>
					</ul>
					<form class="form-inline">
						<input class="form-control mr-sm-2" type="text"> 
						<button class="btn btn-primary my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
					<ul class="navbar-nav ml-md-auto">
						<li class="nav-item active">
							 <a class="nav-link" href="#">Link <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item dropdown">
							 <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
								 <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
								<div class="dropdown-divider">
								</div> <a class="dropdown-item" href="#">Separated link</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>

			<div class="row">
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="media">
						<img class="mr-3" alt="Product" src="https://www.layoutit.com/img/sports-q-c-64-64-8.jpg">
						<div class="media-body">
							<h5 class="mt-0">
								Nested media heading
							</h5> 
							</div>
					</div>
				</div>
			</div>
                                </body>
                              
    </div>
  );
}

export default App;
