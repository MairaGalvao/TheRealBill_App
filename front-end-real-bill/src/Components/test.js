<div class="product">
	<div class="header">
		<div class="back"></div>
	</div>
	<div class="main">
		<div class="left">
			<h2>{location}</h2>

			{/* <h3>$320.00</h3> */}
			{/* <img
      src="http://www.design.si.it/wp-content/uploads/2018/02/Sedia-di-design-nordico-legno-polipropilene-e-cuscino-grigio.png"
      alt=""
    /> */}

			<div class="footer">
				<div class="left">
					<h4> Total Cost: </h4>
					<p id="price">
						{currency} {lifestyleCost}
					</p>
				</div>
			</div>
		</div>
		<div class="right">
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy f
			</p>
			<p>
				Lifestyle level: <a href="">{lifestyleLevel}</a>
			</p>
			<p class="quantity">
				Daily Wage <span class="fa fa-angle-left angle"></span>
				<span id="qt"> {salaryPerDay} </span>
				<span class="fa fa-angle-right angle"></span>
			</p>
			<p class="quantity">
				Days required<span class="fa fa-angle-left angle"></span>
				<span id="qt">{daysRequired}</span>
				<span class="fa fa-angle-right angle"></span>
			</p>
			<div class="right" style={{ cursor: "pointer" }}>
				<p>Save info</p>
			</div>
		</div>
	</div>
</div>;
