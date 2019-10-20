import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import ModalContactUs from './ModalContactUs';

class MainMenu extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			isHide: false, 
			isShowing: false
		};
	}

	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	};

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	};

	hideBar = () => {
		this.prev = window.scrollY;
		if (this.prev >= 100) {
			this.setState({ isHide: true });
		} else if (this.prev <= 100) {
			this.setState({ isHide: false });
		}
	};

	componentDidMount() {
		window.addEventListener('scroll', this.hideBar);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.hideBar);
	}

	render() {
		let classHide = this.state.isHide ? 'scroll_show' : '  ';

		const data = this.props.data ? this.props.data : '';
		const treatment = this.props.data.our_treatments ? this.props.data.our_treatments : '';

		const treatment1 = treatment.treatment1 ? treatment.treatment1 : '';
		const treatments1 = treatment1.treatments ? treatment1.treatments : '';

		const treatment2 = treatment.treatment2 ? treatment.treatment2 : '';
		const treatments2 = treatment2.treatments ? treatment2.treatments : '';

		const treatment3 = treatment.treatment3 ? treatment.treatment3 : '';
		const treatments3 = treatment3.treatments ? treatment3.treatments : '';

		const treatment4 = treatment.treatment4 ? treatment.treatment4 : '';
		const treatments4 = treatment4.treatments ? treatment4.treatments : '';

		const treatment5 = treatment.treatment5 ? treatment.treatment5 : '';
		const treatments5 = treatment5.treatments ? treatment5.treatments : '';

		const treatment6 = treatment.treatment6 ? treatment.treatment6 : '';
		const treatments6 = treatment6.treatments ? treatment6.treatments : '';

		const treatment7 = treatment.treatment7 ? treatment.treatment7 : '';
		const treatments7 = treatment7.treatments ? treatment7.treatments : '';

		const home = this.props.data.home ? this.props.data.home : '';
		const address = home.address ? home.address : '';
		console.log(treatments1);
		return (
			<React.Fragment>
				<ModalContactUs show={this.state.isShowing} close={this.closeModalHandler} data={home} />

				<div className={'menu_scroll' + classHide}>
					<NavLink exact to="/">
						<div className="menu_scroll_logo">Eram Health Dental Clinic</div>
					</NavLink>
					<ul className="menu_scroll_categories_items">
						<li>
							<NavLink exact to="/">
								Home
							</NavLink>
						</li>
						<li id="dropDown2">
							<Link exact to="/#ourTreatments">
								Our treatments
							</Link>
							<div id="drop-panel" className="dropDown-menu2">
								<div className="dropDown-menu_wrapper">
									<ul className="dropDown-menu_list">
										<li>
											<NavLink exact to="/treatment/smile_design">
												<img src="/assets/images/eramSimileDesign.svg" />
											</NavLink>
										</li>

										{Object.values(treatments1).map((key, index) => {
											return (
												<li>
													<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
														{key.title}
													</NavLink>
												</li>
											);
										})}
									</ul>
									<ul className="dropDown-menu_list">
										<li>
											<NavLink exact to="/treatment/smile_design">
												<img src="/assets/images/eramCare.svg" />
											</NavLink>
										</li>
										{Object.values(treatments2).map((key, index) => {
											return (
												<li>
													<NavLink onClick={console.log("heu")} key={index} exact to={`/treatment/treat/${key.link}`}>
														{key.title}
													</NavLink>
												</li>
											);
										})}
									</ul>
									<ul className="dropDown-menu_list">
										<li>
											<NavLink exact to="/treatment/smile_design">
												<img src="/assets/images/eramOralSurgery.svg" />
											</NavLink>
										</li>

										{Object.values(treatments3).map((key, index) => {
											return (
												<li>
													<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
														{key.title}
													</NavLink>
												</li>
											);
										})}
									</ul>
									<ul className="dropDown-menu_list">
										<li>
											<NavLink exact to="/treatment/smile_design">
												<img src="/assets/images/eramHygiene.svg" />
											</NavLink>
										</li>
										{Object.values(treatments4).map((key, index) => {
											return (
												<li>
													<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
														{key.title}
													</NavLink>
												</li>
											);
										})}
									</ul>
									<ul className="dropDown-menu_list">
										<li>
											<NavLink exact to="/treatment/smile_design">
												<img src="/assets/images/eramKids.svg" />
											</NavLink>
										</li>
										{Object.values(treatments5).map((key, index) => {
											return (
												<li>
													<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
														{key.title}
													</NavLink>
												</li>
											);
										})}
									</ul>
									<ul className="dropDown-menu_list">
										<li>
											<NavLink exact to="/treatment/smile_design">
												<img src="/assets/images/eramOrthodontics.svg" />
											</NavLink>
										</li>
										{Object.values(treatments6).map((key, index) => {
											return (
												<li>
													<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
														{key.title}
													</NavLink>
												</li>
											);
										})}
									</ul>
									<ul className="dropDown-menu_list">
										<li>
											<NavLink exact to="/treatment/smile_design">
												<img src="/assets/images/eramImplants.svg" />
											</NavLink>
										</li>

										{Object.values(treatments7).map((key, index) => {
											return (
												<li>
													<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
														{key.title}
													</NavLink>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</li>
						<li>
							<Link exact to="/#aboutUs">
								About us
							</Link>
						</li>
						<li>
							<Link exact to="/#theclinic">
								The Clinic
							</Link>
						</li>
						<li>
							<Link exact to="/#testimonials">
								Testimonials
							</Link>
						</li>
						<li>
							<Link exact to="/#contact">
								Contact Us
							</Link>
						</li>
					</ul>
					<div className="container-main-menu_rigth">
						<ul className="main-menu_rigth_scroll">
							<li>
								<a className="myButton">
									<img class="iconsMyButtonsEmergency" src="/assets/images/first-aid-kit.svg" />
									Emergency
									<img class="iconsMyButtonsArrow" src="/assets/images/play-button.svg" />
								</a>
							</li>
							<li>
								<ul>
									<div className="" onClick={this.openModalHandler}>
										<a className="myButton">Book an appointment</a>
									</div>
								</ul>
							</li>
						</ul>
						<div className="main-menu-rigth_adress">
							<span id="phone"><img src="../../assets/images/phone_black.svg"></img>{address.phone}</span>
						</div>
					</div>
				</div>
				<div className="menu">
					<div className="main-menu">
						<div className="main-menu_left">
							<ul className="main-menu_left_telephone">
								<li className="main-menu_left_emergency ">
									<a className="myButton">
										<img class="iconsMyButtonsEmergency" src="/assets/images/first-aid-kit.svg" />
										Emergency
										<img class="iconsMyButtonsArrow" src="/assets/images/play-button.svg" />
									</a>
								</li>
							</ul>
						</div>
						<ul className=" main-menu_rigth">
							<li>
								<div className="pill-link-phone">
									<a href="#">
										<span id="phone">{address.phone}</span>
									</a>
								</div>
							</li>
							<li>
								<div className="" onClick={this.openModalHandler}>
									<a className="myButton">
										<img class="iconsMyButtons" src="/assets/images/calendar.svg" />
										Book an appointment
										<img class="iconsMyButtonsArrow" src="/assets/images/play-button.svg" />
									</a>
								</div>
								<span id="address">
									{address.address ? address.address.street : ''}{' '}
									{address.address ? address.address.city : ''}
								</span>
							</li>
						</ul>
					</div>
					<div className="second-menu_categories">
						<NavLink exact to="/">
							<div className="second-menu_categories_logo">
								<div className="second-menu_categories_logo_pic" />
							</div>
						</NavLink>
						<ul className="second-menu_categories_items">
							<li>
								<NavLink exact to="/">
									Home
								</NavLink>
							</li>
							<li id="dropDown">
								<Link exact to="/#ourTreatments">
									Our treatments
								</Link>
								<div id="drop-panel" className="dropDown-menu">
									<div className="dropDown-menu_wrapper">
										<ul className="dropDown-menu_list">
											<li>
												<NavLink exact to="/ourtreatments">
													<img src="/assets/images/eramSimileDesign.svg" />
												</NavLink>
											</li>

											{Object.values(treatments1).map((key, index) => {
												return (
													<li>
														<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
															{key.title}
														</NavLink>
													</li>
												);
											})}
										</ul>
										<ul className="dropDown-menu_list">
											<li>
												<NavLink exact to="/treatment/care">
													<img src="/assets/images/eramCare.svg" />
												</NavLink>
											</li>

											{Object.values(treatments2).map((key, index) => {
												return (
													<li>
														<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
															{key.title}
														</NavLink>
													</li>
												);
											})}
										</ul>
										<ul className="dropDown-menu_list">
											<li>
												<NavLink exact to="/treatment/facial">
													<img src="/assets/images/eramOralSurgery.svg" />
												</NavLink>
											</li>
											{Object.values(treatments3).map((key, index) => {
												return (
													<li>
														<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
															{key.title}
														</NavLink>
													</li>
												);
											})}
										</ul>
										<ul className="dropDown-menu_list">
											<li>
												<NavLink exact to="/treatment/hygiene">
													<img src="/assets/images/eramHygiene.svg" />
												</NavLink>
											</li>

											{Object.values(treatments4).map((key, index) => {
												return (
													<li>
														<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
															{key.title}
														</NavLink>
													</li>
												);
											})}
										</ul>
										<ul className="dropDown-menu_list">
											<li>
												<NavLink exact to="/treatment/kids">
													<img src="/assets/images/eramKids.svg" />
												</NavLink>
											</li>

											{Object.values(treatments5).map((key, index) => {
												return (
													<li>
														<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
															{key.title}
														</NavLink>
													</li>
												);
											})}
										</ul>
										<ul className="dropDown-menu_list">
											<li>
												<NavLink exact to="/treatment/orthodontics">
													<img src="/assets/images/eramOrthodontics.svg" />
												</NavLink>
											</li>

											{Object.values(treatments6).map((key, index) => {
												return (
													<li>
														<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
															{key.title}
														</NavLink>
													</li>
												);
											})}
										</ul>
										<ul className="dropDown-menu_list">
											<li>
												<NavLink exact to="/treatment/implants">
													<img src="/assets/images/eramImplants.svg" />
												</NavLink>
											</li>
											{Object.values(treatments7).map((key, index) => {
												return (
													<li>
														<NavLink key={index} exact to={`/treatment/treat/${key.link}`}>
															{key.title}
														</NavLink>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</li>
							<li>
								<Link exact to="/#aboutUs">
									About us
								</Link>
							</li>
							<li>
								<Link exact to="/#theclinic">
									The Clinic
								</Link>
							</li>
							<li>
								<Link exact to="/#testimonials">
									Testimonials
								</Link>
							</li>
							<li>
								<Link exact to="/#contact">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default MainMenu;
