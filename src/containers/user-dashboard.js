import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './style/user-dashboard.css';
import dashboardlogo from '../components/img/logo_ai.svg';
import exclamationmark from '../components/img/exclamation-mark.svg';
import userphoto from '../components/img/userphoto.png';
import checkmarkbutton from '../components/img/check-mark-button.svg';
import moment from 'moment/min/moment-with-locales';
import Moment from 'react-moment';
import axios from 'axios';
import '../components/Form/progressbar';
import $ from 'jquery';
import { API_DOMAIN } from '../Constants/config';

class UserDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registeredEvents: [],
      allEvents: [],
      allCoupons: [],
			workshopTotal: 0,
			userPayState: {
				tF: 0,
				aF: 0,
				discount: 0,
				rF: 0,
				coupon: {
					discount: 0
				},
				applications: []
			},
			CouponDetails: [],
			userDetails: {}
		};
	}

	getCookie = (cname) => {
		var name = cname + '=';
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	};

	componentWillMount() {
    this.handleLoad()
  }

	checkAPP = (event) => {
		return event.status == 'APP';
	};

	fetchProfile = () => {
		document.getElementById('mydiv').style.display = 'block';

		axios
			.get(API_DOMAIN + '/user/profile', {
				headers: {
					Authorization: 'Token ' + this.getCookie('token')
				}
			})
			.then((res) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(res.data);
				this.setState({
					userDetails: res.data,
					registeredEvents: res.data.applications.filter(this.checkAPP)
				});
			})
			.catch((err) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(err);
			});

		document.getElementById('mydiv').style.display = 'block';

		axios
			.get(API_DOMAIN + '/api/events/')
			.then((response) => {
				document.getElementById('mydiv').style.display = 'none';
				this.setState({ allEvents: response.data });
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
		this.fetchAmount();
	};

	componentDidMount() {
    this.fetchProfile();
    this.fetchCoupons()
  }
  
  fetchCoupons = () => {
    axios
			.get(API_DOMAIN + '/api/coupons?is_visible=true')
			.then((response) => {
        document.getElementById('mydiv').style.display = 'none';
        console.log(response.data)
				this.setState({ allCoupons: response.data });
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
  }

	handleLoad = () => {
		var token = '';
		var name = 'token=';
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				token = c.substring(name.length, c.length);
			}
    }
    console.log(token)
		if (token == '') {
			window.location.href = '/login';
		}
	};

	fetchAmount = () => {
		document.getElementById('mydiv').style.display = 'block';
		axios
			.get(API_DOMAIN + '/api/fee', {
				headers: {
					Authorization: 'Token ' + this.getCookie('token')
				}
			})
			.then((response) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(response);
				this.setState({ userPayState: response.data });
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
	};

	couponAcco = () => {
		// console.log("uhbvuh")
		var couponcode = document.getElementById('couponcode').value;
		// console.log(couponcode)
		document.getElementById('mydiv').style.display = 'block';

		axios
			.get(API_DOMAIN + '/coupon/' + couponcode, {
				headers: {
					Authorization: 'Token ' + this.getCookie('token')
				}
			})
			.then((response) => {
				document.getElementById('mydiv').style.display = 'none';
				this.setState({ userPayState: response.data });
				console.log(this.state.userPayState.coupon.discount);
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
  };
  
  couponApply = (coupon) => {
		// console.log("uhbvuh")
		// console.log(couponcode)
		document.getElementById('mydiv').style.display = 'block';

		axios
			.get(API_DOMAIN + '/coupon/' + coupon, {
				headers: {
					Authorization: 'Token ' + this.getCookie('token')
				}
			})
			.then((response) => {
				document.getElementById('mydiv').style.display = 'none';
				this.setState({ userPayState: response.data });
				console.log(this.state.userPayState.coupon.discount);
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
	};

	toggleAcco = (bool) => {
		document.getElementById('mydiv').style.display = 'block';
		var address = API_DOMAIN + '/api/fee?accommodation=false';
		if (bool) {
			address = API_DOMAIN + '/api/fee?accommodation=true';
		}
		axios
			.get(address, {
				headers: {
					Authorization: 'Token ' + this.getCookie('token')
				}
			})
			.then((response) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(response);
				this.setState({ userPayState: response.data });
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
	};

	toggleAccoBtn = () => {
		if (this.state.userPayState.is_accommodation == 0) {
			return (
				<button onClick={this.toggleAcco(true)} className="acco-toggle-btn-select">
					add
				</button>
			);
		} else {
			return (
				<button onClick={this.toggleAcco(false)} className="acco-toggle-btn">
					remove
				</button>
			);
		}
	};

	catchAPI = (somekey) => {
		console.log(somekey);
	};

	payment = (fee) => {
		let Razorpay = window.Razorpay;
		let rzp1 = new Razorpay({
			key: 'rzp_live_ECRkV7D8aGmCa6',
			amount: fee * 100, // 2000 paise = INR 20
			name: 'E Summit IITR',
			description: 'Registration Fee',
			image: '/favicon.png',
			handler: (response) => {
				this.capturePayments(response.razorpay_payment_id, fee * 100);
			},
			prefill: {
				name: this.state.userDetails.name,
				email: this.state.userDetails.email,
				phone: this.state.userDetails.phone
			},
			notes: {
				address: 'Hello World'
			},
			theme: {
				color: '#000000'
			}
		});
		rzp1.open();
	};

	removeCoupon = () => {
		document.getElementById('mydiv').style.display = 'block';
		var address = API_DOMAIN + '/api/coupon/remove';
		axios
			.get(address, {
				headers: {
					Authorization: 'Token ' + this.getCookie('token')
				}
			})
			.then((response) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(response);
				this.setState({ userPayState: response.data });
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
	};

	logout = () => {
		document.cookie.split(';').forEach(function(c) {
			document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
		});
		localStorage.removeItem('user');
		window.location.href = '/login';
	};

	copyInviteLink = (e) => {
		var copyText = document.getElementById('myInviteURL');
		copyText.select();
		document.execCommand('Copy');
		var tooltip = document.getElementById('myToolTip');
		tooltip.innerHTML = 'Copied!';
	};

	deHover = () => {
		var tooltip = document.getElementById('myToolTip');
		tooltip.innerHTML = 'Copy';
	};

	toggleWorkshop = (bool, id) => {
		document.getElementById('mydiv').style.display = 'block';
		var address = API_DOMAIN + '/event/' + id + '/remove';
		if (bool) {
			address = API_DOMAIN + '/event/' + id + '/apply';
		}
		axios
			.get(address, {
				headers: {
					Authorization: 'Token ' + this.getCookie('token')
				}
			})
			.then((response) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(response);
				this.fetchAmount();
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
	};

	capturePayments = (razorpay_payment_id, total_amount) => {
		document.getElementById('mydiv').style.display = 'block';
		var payload = {
			razorpay_payment_id: razorpay_payment_id,
			total_amount: total_amount
		};
		var address = API_DOMAIN + '/api/fee/capture/';
		axios
			.post(address, payload, {
				headers: {
					Authorization: 'Token ' + this.getCookie('token')
				}
			})
			.then((response) => {
				this.fetchAmount();
				console.log(response);
			})
			.catch((error) => {
				document.getElementById('mydiv').style.display = 'none';
				console.log(error);
			});
	};

	render() {
		var { registration_fee, accommodation_fee, coupon } = this.state.userPayState;
		// console.log(accommodation_fee);

		var { registeredEvents, allEvents, userPayState, allCoupons } = this.state;
		console.log(registeredEvents);
		var registeredEventsMap = registeredEvents.map((user) => (
			<LandingUserTile
				eventName={user.event.title}
				end_date={user.event.end_date}
				start_date={user.event.start_date}
				event_type={user.event.event_type}
			/>
		));
		var allEventsMap = allEvents.map((user) => (
			<LandingUserTile
				eventName={user.title}
				message={user.message}
				timestamp={user.timestamp}
				end_date={user.end_date}
				start_date={user.start_date}
				event_type={user.event_type}
			/>
		));
		var workshopTotal = 0;
		var workshops = userPayState.applications.map((workshop) => {
			if (workshop.status == 'APP' && workshop.event_fee !== null) {
				return (
					<tr className="acco-td">
						<td className="fee-dashboard">
							<strike>{workshop.event_title}</strike>
							<button
								onClick={(e) => {
									e.preventDefault();
									this.toggleWorkshop(true, workshop.event);
								}}
								className="acco-toggle-btn-select"
							>
								add
							</button>
						</td>
						<td className="fee-dashboard">
							<strike>: Rs {workshop.event_fee}</strike>
						</td>
					</tr>
				);
			} else if (workshop.status == 'REG' && workshop.event_fee !== null) {
				workshopTotal += workshop.event_fee;
				return (
					<tr className="acco-td">
						<td className="fee-dashboard">
							{workshop.event_title}
							<button
								onClick={(e) => {
									e.preventDefault();
									this.toggleWorkshop(false, workshop.event);
								}}
								className="acco-toggle-btn"
							>
								remove
							</button>
						</td>
						<td className="fee-dashboard">: Rs {workshop.event_fee}</td>
					</tr>
				);
			}
    });
    
		console.log(userPayState.applications);
		var acco = <tr />;

		if (this.state.userPayState.is_accommodation == 0) {
			acco = (
				<tr className="acco-td">
					<td className="fee-dashboard">
						<strike>Accommodation Fee</strike>
						<button
							onClick={(e) => {
								e.preventDefault();
								this.toggleAcco(true);
							}}
							className="acco-toggle-btn-select"
						>
							add
						</button>
					</td>
					<td className="fee-dashboard">
						<strike>: Rs {accommodation_fee}</strike>
					</td>
				</tr>
			);
		} else {
			acco = (
				<tr className="acco-td">
					<td className="fee-dashboard">
						Accommodation Fee
						<button
							onClick={(e) => {
								e.preventDefault();
								this.toggleAcco(false);
							}}
							className="acco-toggle-btn"
						>
							remove
						</button>
					</td>
					<td className="fee-dashboard">: Rs {accommodation_fee}</td>
				</tr>
			);
		}

		var register_fee = (
			<tr>
				<td className="fee-dashboard">Registration Fee</td>
				<td className="fee-dashboard">: Rs {registration_fee}</td>
			</tr>
		);

		var fee_after_discount = registration_fee;
		if (this.state.userPayState.coupon) {
			if (this.state.userPayState.coupon.coupon_type == 'PER') {
				fee_after_discount =
					registration_fee - registration_fee * this.state.userPayState.coupon.discount * 0.01;
			} else if (this.state.userPayState.coupon.coupon_type == 'OFF') {
				fee_after_discount = registration_fee - this.state.userPayState.coupon.discount;
			} else {
				fee_after_discount = registration_fee;
			}

			var registrationText = '';
			if ((this.state.userDetails.user_type == 'AMB') || (this.state.userDetails.is_ca_applicant)) {
				registrationText = '(Offer only for Campus Ambassadors)';
			}

			register_fee = (
				<tr>
					<td className="fee-dashboard">Registration Fee</td>
					<td className="fee-dashboard">
						<strike>: Rs {registration_fee}</strike> Rs {fee_after_discount} {registrationText}
					</td>
				</tr>
			);
		}

    var coupons = allCoupons.map((coupon) => {
			if (coupon.coupon_type == 'PER') {
				return (
					<tr className="acco-td-2">
						<td className="fee-dashboard">
							{coupon.code}
						</td>
						<td className="fee-dashboard">
							{coupon.discount} % discount

              <button
								onClick={(e) => {
									e.preventDefault();
									this.couponApply(coupon.code);
								}}
								className="acco-toggle-btn-select cpnbtn"
							>
								Apply
							</button>
						</td>
        	
					</tr>
				);
			} else if (coupon.coupon_type == 'OFF') {
				return (
					<tr className="acco-td-2">
						<td className="fee-dashboard">
							{coupon.code}
						</td>
						<td className="fee-dashboard"> Rs {coupon.discount} Off 
            
            <button
								onClick={(e) => {
									e.preventDefault();
									this.couponApply(coupon.code);
								}}
								className="acco-toggle-btn-select cpnbtn"
							>
								Apply
							</button>
              </td>
					</tr>
				);
			}
		});


		var couponApply;
		var ac_fee = this.state.userPayState.is_accommodation ? accommodation_fee : 0;
		var totalFee = ac_fee + fee_after_discount + workshopTotal;
		var paymentStatusText = document.getElementById("paymentDue")
		var textPendingPayment = totalFee === 0 ? "The event is on us!" : "Pending"
		try{
			document.getElementById("payBtn").disabled = totalFee === 0			
		}catch(err){	
			
		}
		if (!this.state.userPayState.coupon) {
			couponApply = (
				<form className="form-coupon">
					<input className="coupon-code" id="couponcode" placeholder="ENTER COUPON CODE" name="coupon" />
					<button
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							this.couponAcco();
						}}
						className="coupon-button"
					>
						Apply
					</button>
					
					<div>
					<br />
									Available Coupons:{' '}
									<span className="fee-dashboard"> (Hurry! Expires in two days)</span>
					</div>
          <table className="table" id="tableCoupons">
            {coupons}
          </table>
				</form>
			);
		} else {
			var placeholder = this.state.userPayState.coupon.code;

			if (this.state.userPayState.coupon.coupon_type == 'PER') {
				placeholder += '    (' + this.state.userPayState.coupon.discount + '% discount)';
			} else if (this.state.userPayState.coupon.coupon_type == 'OFF') {
				placeholder += '    ( Rs ' + this.state.userPayState.coupon.discount + ' OFF)';
			}

			couponApply = (
				<form className="form-coupon">
					<p className="coupon-code" id="couponcodeapplied">
						{placeholder}
					</p>
					<button type="submit" className="coupon-button" id="coupon-remove-btn" onClick={(e) => {e.preventDefault();this.removeCoupon()}}>
						remove
					</button>
        </form>
			);
		}

		var { userPayState, userDetails } = this.state;

		// var workshop = this.state.userPayState.application.map

		if (userPayState.payment_status === 'SUC') {
			var paymentStatus = (
				<Row className="payment-box">
					<Col md={6} sm={6}>
						<div className="payment-status">
							<img src={checkmarkbutton} className="payment-status-logo" />
							Payment Status : <span className="payment-done">Done</span>
						</div>
					</Col>
				</Row>
			);
		} else {
			var paymentStatus = (
				<Row className="payment-box">
					<Col md={9} sm={9}>
						<div className="payment-status">
							<img src={exclamationmark} className="payment-status-logo" />
							Payment Status : <span className="payment-due" id="paymentDue">{textPendingPayment}</span>
							<div>
								<table className="table">
									{register_fee}
									{acco}
									{workshops}
									<tr className="total-td">
										<td className="fee-total-dashboard">Total</td>
										<td className="fee-dashboard">: Rs {totalFee}</td>
									</tr>
								</table>
								<div className="coupon-dashboard">
									Apply Coupon Code :{' '}
									<span className="fee-dashboard">(coupon is only valid on registration fee)</span>
								</div>
								{couponApply}
							</div>
						</div>
					</Col>
					<Col md={3} sm={3} className="button-pay-now">
						<button className="payment-button" id="payBtn" onClick={() => this.payment(totalFee)}>
							PAY Rs {totalFee}
						</button>
					</Col>
				</Row>
			);
		}

		console.log(this.state.registeredEvents);
		var userImage = '';
		var userCollege = '';
		var OtherDetails = '';
		var colour = '';
		if (userDetails.user_type == 'IIT') {
			userImage = './images/userphoto.svg';
			userCollege = userDetails.college;
			OtherDetails = '';
			colour = '#FFFFFF';
			document.getElementById('first-l').classList.remove('first-letter');
			document.getElementById('first-l').classList.add('first-letter-pink');
		} else if (userDetails.user_type == 'AMB') {
			userImage = './images/medalbig.svg';
			userCollege = userDetails.college;
			OtherDetails = '(Campus Ambassador)';
			colour = '#ACE583';
		} else if (userDetails.is_ca_applicant) {
			userImage = './images/medal.svg';
			userCollege = userDetails.college;
			OtherDetails = '(Applied for CA program)';
			colour = '#ACE583';
		} else {
			userImage = './images/userphoto.svg';
			userCollege = userDetails.college;
			OtherDetails = '';
			colour = '#FFFFFF';
		}
		if (userDetails.name) {
			var fname = userDetails.name.charAt(0);
			('');
		}

		var rank = userDetails.ranking ? (
			<div>
				<span className="ranking-userdashboard">{userDetails.ranking}</span>
				<br />
				<span className="rank-userdashboard">Rank</span>
			</div>
		) : (
			<div />
		);
		var userDetailsBar = (
			<div>
				<div>
					<center>
						<div
							className="userphoto"
							style={{
								backgroundImage: `url(${userImage})`,
								paddingTop: '4%',
								backgroundRepeat: 'no-repeat',
								height: '68px',
								backgroundPosition: 'center'
							}}
						>
							<span id="first-l" className="first-letter" style={{ color: colour }}>
								{fname}
							</span>
						</div>
					</center>
				</div>
				<div className="user-name">{userDetails.name}</div>
				<div className="user-other-details">{OtherDetails}</div>
				<div className="user-other-details">{userCollege}</div>
				{rank}
				<hr />
				{userDetails.user_type == 'AMB' ? (
					<center className="invite-url">
						<span className="invite-text">Invite: </span>
						<input className="invite-link" id="myInviteURL" value={userDetails.ca_invite.url} />
						<div class="tooltip">
							<span className="tooltiptext" id="myToolTip">
								Copy
							</span>
							<img
								className="copy-btn"
								src={'./images/Copy.svg'}
								onClick={this.copyInviteLink}
								onMouseOut={this.deHover}
							/>
						</div>
						<br />
					</center>
				) : (
					<div />
				)}
			</div>
		);

		var registeredEventsElem =
			registeredEventsMap.length !== 0 ? (
				<div>
					<Row>
						<Col md={2} sm={2} className="registered-events">
							Applied Events
						</Col>
						<div className="line-dashboard">
							<div className="horizontal-line-dashboard" />
						</div>
					</Row>
					<Row>{registeredEventsMap}</Row>{' '}
				</div>
			) : (
				<Row />
			);
		return (
			<Grid fluid>
				<Row className="dashboard-landing" fluid>
					<div id="mydiv" />
					<div className="side-column">
						<Grid fluid className="side-column-a">
							<Col md={12}>
								<a href=".">
									<img src={dashboardlogo} className="dashboardlogo-image" />
								</a>
								<hr />
								<center>{userDetailsBar}</center>
								<center><h5>Book your flight tickets</h5><br/><a className="oistay-btn" href="http://oistay.com" target="_blank">oistay</a></center>
								<hr id="bottomhr" />
								<p className="log-out-dashboard" onClick={this.logout}>
									Log out
								</p>
							</Col>
						</Grid>
						{/* <img src={dashboardlogo} className='dashboardlogo-image' />
            <div className='horizontal-line-dashboard top-side' />
            {userDetailsBar}
            <div className='horizontal-line-dashboard-below-details' />
            <div className='horizontal-line-dashboard bottom-side' />
            <p className='log-out-dashboard' onClick={this.logout}>
                            Log out
                        </p> */}
					</div>
					<div className="right-column">
						<Grid fluid style={{ padding: 0 }}>
							<Col md={12} sm={12} className="dashboard-header">
								<Grid fluid className="payment-box-full">
									{paymentStatus}
									{registeredEventsElem}
									<Row>
										<Col md={2} sm={2} className="all-events">
											All Events
										</Col>
										<div className="line-dashboard">
											<div className="horizontal-line-dashboard" />
										</div>
									</Row>

									<Row>{allEventsMap}</Row>
								</Grid>
							</Col>
						</Grid>
					</div>
				</Row>
			</Grid>
		);
	}
}

class LandingUserTile extends Component {
	constructor(props) {
		super(props);
	}

	dateFormat = (date) => {
		return moment(date).format('DD MMM YYYY');
	};

	render() {
		var imageBottom = '';
		switch (this.props.event_type) {
			case 'WRK':
				imageBottom = './images/circles-redblack.svg';
				break;
			case 'NET':
				imageBottom = './images/circles-blueblack.svg';
				break;
			case 'CMP':
				imageBottom = './images/circles-greenblack.svg';
				break;
			case 'KNW':
				imageBottom = './images/circles-yellowblack.svg';
				break;
			default:
				console.log(this.props.event_type);
				imageBottom = './images/circles-redblack.svg';
		}

		var avail = 2;
		if (moment().isAfter(this.props.end_date)) {
			avail = 0;
		} else if (moment().isAfter(this.props.start_date)) {
			avail = 1;
		}
		var available = <div />;
		var deadline = <span />;

		switch (avail) {
			case 0:
				available = <div className="red-dashboard" />;
				deadline = <span />;
				break;
			case 1:
				available = <div className="green-dashboard" />;
				deadline = (
					<div className="explore-events-user">
						Deadline<br />
						{this.dateFormat(this.props.end_date)}
					</div>
				);
				break;
			default:
				available = <div />;
				deadline = (
					<div className="explore-events-user">
						Registration opens<br />
						<Moment to={this.props.start_date}>{moment()}</Moment>
					</div>
				);
		}
		return (
			<Col md={4} sm={10} lg={4}>
				<div className="event-cards-user">
					{available}
					<div className="subhead-events-user">{this.props.eventName}</div>
					<div className="sub-subhead-events-user">{this.props.message}</div>
					{deadline}
					<img className="card-circles-landing" src={imageBottom} />
				</div>
			</Col>
		);
	}
}

export default UserDashboard;
