import React, { Component } from 'react';
import Header from '../../../components/Customer/Header/Header';
import Footer from '../../../components/Customer/Footer/Footer';
import Menu from '../../../components/Customer/Menu/Menu';
import CardItemDetail from '../../../components/Customer/CardItemDetail/CardItemDetail'
import { Container, Table, Button } from 'reactstrap';
import './Profile.scss';
class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: 0,
			tabInformation: 0,
			tabFavourite: 1,
			tab: [
				{
					id: 0,
					name: 'Thông tin cá nhân'
				},
				{
					id: 1,
					name: 'Bộ sưu tập yêu thích'
				}
			]
		};
	}
	setCurrentTab = (id) => {
		this.setState({ currentTab: id });

		const tab = document.getElementsByClassName("tab");
		Array.from(tab).reverse().forEach(item => {
			item.classList.remove("tab-active");
		})
		tab[id].classList.add("tab-active");
	}

	onEditInfor = () => {
		const btnOnEdit = document.getElementsByClassName("fa-toggle-on");
		const btnOffEdit = document.getElementsByClassName("fa-toggle-off");
		btnOnEdit[0].style.display = "block";
		btnOffEdit[0].style.display = "none";

		const lable = document.getElementById("lable-edit");
		lable.innerHTML = "Đang chỉnh sửa";
		lable.style.fontStyle = "italic";

		const inputTags = document.getElementsByClassName("infor-edit");
		Array.from(inputTags).forEach(item => {
			item.style.display = "block";
		})
		const showTextTags = document.getElementsByClassName("infor-show");
		Array.from(showTextTags).forEach(item => {
			item.style.display = "none";
		})

		const btnSave = document.getElementById("btn-save-wrap");
		btnSave.style.display = "block";
	}

	offEditInfor() {
		const btnOnEdit = document.getElementsByClassName("fa-toggle-on");
		const btnOffEdit = document.getElementsByClassName("fa-toggle-off");
		btnOnEdit[0].style.display = "none";
		btnOffEdit[0].style.display = "block";

		const lable = document.getElementById("lable-edit");
		lable.innerHTML = "Chỉnh sửa";
		lable.style.fontStyle = "normal";

		const inputTags = document.getElementsByClassName("infor-edit");
		Array.from(inputTags).forEach(item => {
			item.style.display = "none";
		})

		const showTextTags = document.getElementsByClassName("infor-show");
		Array.from(showTextTags).forEach(item => {
			item.style.display = "block";
		})

		const btnSave = document.getElementById("btn-save-wrap");
		btnSave.style.display = "none";
	}

	getContentTab() {
		//todo: db demo
		const customer = {
			hoten: "Trần Minh Ngọc Nhi",
			ngayThangNamSinh: "12/02/1998",
			tenDangNhap: "Ngọc Nhi",
			email: "tmnnhi98@gmail.com",
			dienThoai: "0909 009 999",
			loaiKhachHang: "Bạch kim",
			diemTichLuy: 103
		};

		const moviesSample = [{
			name: "Game Of Thrones",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
			type: "Cuộc sống",
			releaseDate: "April 1, 2019",
			duration: "02 giờ 50 phút",
			director: "Grace Belly",
			actors: " Alexander Cattly, Greta Garbo",
			language: "Tiếng Anh",
			age: "",
			price: 80000,
			isActive: true,
			rate: 4.5,
			point: 2,
			img: "http://demo.amytheme.com/movie/demo/movie-news/wp-content/uploads/2019/04/img_8-1-196x336.jpg"
		},
		{
			name: "Game Of Thrones",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
			type: "Cuộc sống",
			releaseDate: "April 1, 2019",
			duration: "02 giờ 50 phút",
			director: "Grace Belly",
			actors: " Alexander Cattly, Greta Garbo",
			language: "Tiếng Anh",
			age: "",
			price: 80000,
			isActive: true,
			rate: 4.5,
			point: 2,
			img: "http://demo.amytheme.com/movie/demo/movie-news/wp-content/uploads/2019/04/img_9-1-196x336.jpg"
		},
		{
			name: "Game Of Thrones",
			description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
			type: "Cuộc sống",
			releaseDate: "April 1, 2019",
			duration: "02 giờ 50 phút",
			director: "Grace Belly",
			actors: " Alexander Cattly, Greta Garbo",
			language: "Tiếng Anh",
			age: "",
			price: 80000,
			isActive: true,
			rate: 4.5,
			point: 2,
			img: "http://demo.amytheme.com/movie/demo/movie-news/wp-content/uploads/2019/04/img_7-1-196x336.jpg"
		}]

		if (this.state.currentTab === this.state.tabInformation) {
			return (
				<div className="infor-wrap">
					<div className="edit">
						<span id="lable-edit"> Chỉnh sửa</span>
						<i className="fas fa-toggle-off" onClick={() => this.onEditInfor()}></i>
						<i className="fas fa-toggle-on" onClick={() => this.offEditInfor()}></i>
					</div>

					<Table className="table">
						<tr>
							<td className="title">Họ tên: </td>
							<td id="name" className="infor-show">{customer.hoten}</td>
							<td><input className="infor-edit" type="text" name="hoTen" value={customer.hoten} /></td>
						</tr>
						<tr>
							<td className="title">Ngày tháng năm sinh: </td>
							<td id="ngayThangNamSinh" className="infor-show">{customer.ngayThangNamSinh}</td>
							<td><input className="infor-edit" type="text" name="hoTen" value={customer.ngayThangNamSinh} /></td>
						</tr>
						<tr>
							<td className="title">Tên đăng nhập: </td>
							<td id="tenDangNhap" className="infor-show">{customer.tenDangNhap}</td>
							<td><input className="infor-edit" type="text" name="hoTen" value={customer.tenDangNhap} /></td>
						</tr>
						<tr>
							<td className="title">Email: </td>
							<td id="email" className="infor-show">{customer.email}</td>
							<td><input className="infor-edit" type="text" name="hoTen" value={customer.email} /></td>
						</tr>
						<tr>
							<td className="title">Điện thoại: </td>
							<td id="dienThoai" className="infor-show">{customer.dienThoai}</td>
							<td><input className="infor-edit" type="text" name="hoTen" value={customer.dienThoai} /></td>
						</tr>
					</Table>
					<div id="btn-save-wrap">
						<Button id="btn-save-infor">Lưu</Button>
					</div>
				</div>);
		} else if (this.state.currentTab == this.state.tabFavourite) {
			return (
				<div className="favourite-wrap">
					<div id="sum-favoutire-movie">Tổng cộng: 12 bộ phim</div>
					<div className="favourite-content-wrap">
						<div className="favourite-movie-left-column">
							{
								moviesSample.map((item, index) => {
									if (index % 2 == 0) {
										return (
											<CardItemDetail movie={item} />
										)
									}
								})
							}
						</div>
						<div className="favourite-movie-right-column">

							{
								moviesSample.map((item, index) => {
									if (index % 2 == 1) {
										return (
											<CardItemDetail movie={item} />
										)
									}
								})
							}
						</div>
					</div>
				</div>
			)
		}
	};



	render() {
		return (
			<div>
				<head>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
				</head>
				<div className="profile-container-wrap">
					<Header />
					<Menu />
					<Container>
						<div className="tab-wrap">
							{this.state.tab.map((item) => {
								return (
									<div className={item.id == this.state.currentTab ? "tab tab-active" : "tab"} onClick={() => this.setCurrentTab(item.id)}>
										{item.name}
									</div>
								);
							})}
						</div>
						<div className="profile-content">
							{this.getContentTab()}
						</div>
					</Container>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Profile;
