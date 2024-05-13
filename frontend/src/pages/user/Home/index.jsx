const Home = ()=>{
return(
<>

<div className="main_nav_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-right">
						<div className="logo_container">
							<a href="#">colo<span>shop</span></a>
						</div>
						<nav className="navbar">
							<ul className="navbar_menu">
								<li><a href="#">home</a></li>
								<li><a href="#">shop</a></li>
								<li><a href="#">promotion</a></li>
								<li><a href="#">pages</a></li>
								<li><a href="#">blog</a></li>
								<li><a href="contact.html">contact</a></li>
							</ul>
							<ul className="navbar_user">
								<li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li>
								<li className="checkout">
									<a href="#">
										<i className="fa fa-shopping-cart" aria-hidden="true"></i>
										<span id="checkout_items" className="checkout_items">2</span>
									</a>
								</li>
							</ul>
							<div className="hamburger_container">
								<i className="fa fa-bars" aria-hidden="true"></i>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
</>
)
}
export{Home} 