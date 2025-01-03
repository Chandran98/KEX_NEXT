// /* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState, useRef } from "react";
import { Tab, Nav } from "react-bootstrap";
import Link from "next/link";
import "../../assets/css/style.css";
import Header from "@/components/home/header";

const cardBlog = [
    {title:'Gainers'},
    {title:'Loosers'},
    {title:'Highlites'},
    {title:'Listing'},
];

const tableData = [
    { id:11, title1: 'ZEC', title2:'ZCash', price: '$0.9632', change: '+9%', volume: '96,525.00', cap:'$18M' },
    { id:12, title1: 'AUD', title2:'Australian Doller',price: '$0.6932',change: '+22%', volume: '30,585.00', cap:'$96M'   },
    { id:13, title1: 'ETH', title2:'Etherium Classic', price: '$0.6258', change: '+40%', volume: '80,752.00', cap:'$22M'  },
    { id:14, title1: 'XRP', title2:'Ripplecoin',price: '$0.6258', change: '-11%', volume: '80,752.00', cap:'$22M'   },
    { id:15, title1: 'XMR', title2:'Monero',price: '$0.3685', change: '-8%', volume: '75,52.00', cap:'$30M'   },
    { id:16, title1: 'Dash', title2:'Dash',price: '$0.1478', change: '+11%', volume: '14,752.00', cap:'$9M'   },
];

const Market = () =>{

    const [data, setData] = useState(
		document.querySelectorAll("#market_wrapper tbody tr")
	);
	const sort = 6;
	const activePag = useRef(0);
	const [test, settest] = useState(0);

	// Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};
   // use effect
    useEffect(() => {
      setData(document.querySelectorAll("#market_wrapper tbody tr"));
      //chackboxFun();
	}, [test]);

  
   // Active pagginarion
    activePag.current === 0 && chageData(0, sort);
   // paggination
    let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		settest(i);
	};

    return(
        <>
        <Header/>
            <div className="row p-8">
                <div className="col-xl-12">
                    <div className="row">
                        {cardBlog.map((item, index)=>(
                            <div className="col-xl-3 col-lg-6 col-md-12" key={index}>
                                <div className="card">
                                    <div className="card-body py-3">
                                        <h4 className="fs-18 mb-3">Top {item.title}</h4>
                                        <div className="market-list d-flex align-items-center justify-content-between mb-2">
                                            <Link href={"#"} className="market-title d-flex align-items-center">
                                                <div className="market-icon bg-warning">
                                                    <i className="fa-solid fa-bitcoin-sign"></i>
                                                </div>
                                                <h5 className="mb-0 ms-2">BTC</h5>
                                            </Link>
                                            <span className="fs-14">273</span>
                                            <span className="fs-14 text-success">+35.56%</span>
                                        </div>
                                        <div className="market-list d-flex align-items-center justify-content-between mb-2">
                                            <Link href={"#"} className="market-title d-flex align-items-center">
                                                <div className="market-icon bg-primary">
                                                    <i className="fa-brands fa-ethereum"></i>
                                                </div>
                                                <h5 className="mb-0 ms-2">ETH</h5>
                                            </Link>
                                            <span className="fs-14">150</span>
                                            <span className="fs-14 text-success">+25.25%</span>
                                        </div>
                                        <div className="market-list d-flex align-items-center justify-content-between mb-2">
                                            <Link href={"#"} className="market-title d-flex align-items-center">
                                                <div className="market-icon bg-danger">
                                                    <i className="fa-solid fa-litecoin-sign"></i>
                                                </div>
                                                <h5 className="mb-0 ms-2">LTC</h5>
                                            </Link>
                                            <span className="fs-14">150</span>
                                            <span className="fs-14 text-success">+25.25%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card">
                        <Tab.Container defaultActiveKey="All">
                            <div className="card-header border-0">
                                <Nav as="ul" className="order  nav-tabs" id="pills-tab" role="tablist">
                                    <Nav.Item as="li" className=" my-1" role="presentation">
                                        <Nav.Link as="button"  eventKey="All"  type="button" >All Cryptos</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className=" my-1" role="presentation">
                                        <Nav.Link as="button"  eventKey="Spot" type="button">Spot Markets</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className=" my-1" role="presentation">
                                        <Nav.Link as="button"  eventKey="Future"  type="button">Future Markets</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className=" my-1" role="presentation">
                                        <Nav.Link as="button" className="me-0" eventKey="Listing" type="button">New Listing</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="card-body pt-0">
                                <Tab.Content className="tab-content" >
                                    <Tab.Pane eventKey="All">
                                        <div className="table-responsive dataTablemarket">
                                            <div  id="market_wrapper" className="dataTables_wrapper no-footer">   
                                                <table  className="table dataTable  shadow-hover display" style={{minWidth:"845px"}}>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th className="text-center">Price</th>
                                                            <th className="text-center">Change</th>
                                                            <th className="text-center">24 Volume</th>
                                                            <th className="text-center">Market Cap</th>
                                                            <th className="text-end">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tableData.map((item, index)=>(
                                                            <tr key={index}>
                                                                <td>
                                                                    <Link href={"#"} className="market-title d-flex align-items-center" >
                                                                        <div className= {` market-icon ${index === 5 ? "bg-success" : "bg-warning"}`}>
                                                                            {
                                                                            item.id === 11 ?                                                                            
                                                                                <svg xmlns="http://www.w3.org/2000/svg" height="512pt" version="1.1" viewBox="0 0 512 512" width="512pt">
                                                                                    <g id="surface1">
                                                                                        <path d="M 512 256 C 512 324.378906 485.371094 388.671875 437.019531 437.019531 C 388.671875 485.371094 324.378906 512 256 512 C 187.621094 512 123.328125 485.371094 74.980469 437.019531 C 26.628906 388.671875 0 324.378906 0 256 C 0 187.621094 26.628906 123.328125 74.980469 74.980469 C 123.328125 26.628906 187.621094 0 256 0 C 324.378906 0 388.671875 26.628906 437.019531 74.980469 C 485.371094 123.328125 512 187.621094 512 256 Z M 512 256 " style={{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,66.666667%,12.54902%)",fillOpacity:"1"}} />
                                                                                        <path d="M 512 256 C 512 324.378906 485.371094 388.671875 437.019531 437.019531 C 388.671875 485.371094 324.378906 512 256 512 L 256 0 C 324.378906 0 388.671875 26.628906 437.019531 74.980469 C 485.371094 123.328125 512 187.621094 512 256 Z M 512 256 " style={{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,53.72549%,0%)", fillOopacity:"1"}} />
                                                                                        <path d="M 458 256 C 458 367.378906 367.378906 458 256 458 C 144.621094 458 54 367.378906 54 256 C 54 144.621094 144.621094 54 256 54 C 367.378906 54 458 144.621094 458 256 Z M 458 256 " style={{stroke:"none", fillRule:"nonzero", fill:"rgb(100%,92.54902%,59.215686%)",fillOpacity:"1"}} />
                                                                                        <path d="M 458 256 C 458 367.378906 367.378906 458 256 458 L 256 54 C 367.378906 54 458 144.621094 458 256 Z M 458 256 " style={{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,85.882353%,17.647059%)", fillOpacity:"1"}} />
                                                                                        <path d="M 325.988281 292.609375 C 325.988281 302.261719 324.171875 310.511719 320.53125 317.371094 C 316.890625 324.230469 311.980469 329.78125 305.800781 334.011719 C 299.621094 338.238281 292.5 341.328125 284.460938 343.28125 C 280.058594 344.339844 275.539062 345.109375 270.910156 345.589844 L 270.910156 380.550781 L 240.910156 380.550781 L 240.910156 344.929688 C 233.570312 343.921875 226.289062 342.328125 219.058594 340.101562 C 205.851562 336.039062 194 330.28125 183.5 322.828125 L 198.988281 292.609375 C 200.519531 294.128906 203.269531 296.121094 207.25 298.570312 C 211.21875 301.03125 215.921875 303.488281 221.339844 305.941406 C 226.761719 308.398438 232.769531 310.46875 239.378906 312.160156 C 244.800781 313.558594 250.339844 314.371094 256 314.609375 C 257.230469 314.671875 258.460938 314.699219 259.699219 314.699219 C 279 314.699219 288.648438 308.519531 288.648438 296.160156 C 288.648438 292.269531 287.550781 288.96875 285.351562 286.261719 C 283.148438 283.550781 280.019531 281.179688 275.949219 279.140625 C 271.890625 277.109375 266.980469 275.25 261.21875 273.558594 C 259.539062 273.058594 257.800781 272.550781 256 272.03125 C 251.648438 270.761719 246.949219 269.410156 241.921875 267.96875 C 233.28125 265.601562 225.789062 263.011719 219.441406 260.21875 C 213.089844 257.429688 207.789062 254.121094 203.558594 250.308594 C 199.328125 246.5 196.148438 242.101562 194.039062 237.109375 C 191.921875 232.109375 190.859375 226.148438 190.859375 219.199219 C 190.859375 210.058594 192.550781 201.929688 195.941406 194.820312 C 199.328125 187.699219 204.03125 181.78125 210.039062 177.039062 C 216.050781 172.300781 223.03125 168.699219 231 166.238281 C 234.199219 165.25 237.511719 164.46875 240.910156 163.878906 L 240.910156 131.199219 L 270.910156 131.199219 L 270.910156 163.460938 C 278.21875 164.398438 285.148438 166.089844 291.699219 168.53125 C 302.371094 172.511719 311.679688 177.210938 319.640625 182.621094 L 304.148438 211.070312 C 302.960938 209.890625 300.800781 208.28125 297.671875 206.25 C 294.539062 204.210938 290.71875 202.230469 286.238281 200.28125 C 281.75 198.328125 276.878906 196.679688 271.640625 195.320312 C 266.5 194 261.289062 193.320312 256 193.300781 C 255.878906 193.289062 255.75 193.289062 255.628906 193.289062 C 245.980469 193.289062 238.78125 195.070312 234.039062 198.628906 C 229.300781 202.179688 226.929688 207.179688 226.929688 213.609375 C 226.929688 217.339844 227.820312 220.429688 229.601562 222.878906 C 231.378906 225.339844 233.960938 227.5 237.351562 229.359375 C 240.730469 231.230469 245 232.921875 250.171875 234.441406 C 252.011719 234.980469 253.949219 235.539062 256 236.101562 C 259.691406 237.121094 263.710938 238.179688 268.078125 239.269531 C 276.878906 241.640625 284.878906 244.179688 292.078125 246.890625 C 299.28125 249.601562 305.371094 252.980469 310.371094 257.050781 C 315.359375 261.109375 319.21875 265.980469 321.929688 271.648438 C 324.628906 277.328125 325.988281 284.308594 325.988281 292.609375 Z M 325.988281 292.609375 " 
                                                                                        style={{stroke:"none", fillRule:"nonzero",fill:"rgb(100%,66.666667%,12.54902%)",fillOpacity:"1"}} />
                                                                                        <path d="M 271.640625 195.320312 C 266.5 194 261.289062 193.320312 256 193.300781 L 256 131.199219 L 270.910156 131.199219 L 270.910156 163.460938 C 278.21875 164.398438 285.148438 166.089844 291.699219 168.53125 C 302.371094 172.511719 311.679688 177.210938 319.640625 182.621094 L 304.148438 211.070312 C 302.960938 209.890625 300.800781 208.28125 297.671875 206.25 C 294.539062 204.210938 290.71875 202.230469 286.238281 200.28125 C 281.75 198.328125 276.878906 196.679688 271.640625 195.320312 Z M 271.640625 195.320312 " style={{stroke:"none",fillRule:"nonzero", fill:"rgb(100%,53.72549%,0%)",fillOpacity:"1"}} />
                                                                                        <path d="M 325.988281 292.609375 C 325.988281 302.261719 324.171875 310.511719 320.53125 317.371094 C 316.890625 324.230469 311.980469 329.78125 305.800781 334.011719 C 299.621094 338.238281 292.5 341.328125 284.460938 343.28125 C 280.058594 344.339844 275.539062 345.109375 270.910156 345.589844 L 270.910156 380.550781 L 256 380.550781 L 256 314.609375 C 257.230469 314.671875 258.460938 314.699219 259.699219 314.699219 C 279 314.699219 288.648438 308.519531 288.648438 296.160156 C 288.648438 292.269531 287.550781 288.96875 285.351562 286.261719 C 283.148438 283.550781 280.019531 281.179688 275.949219 279.140625 C 271.890625 277.109375 266.980469 275.25 261.21875 273.558594 C 259.539062 273.058594 257.800781 272.550781 256 272.03125 L 256 236.101562 C 259.691406 237.121094 263.710938 238.179688 268.078125 239.269531 C 276.878906 241.640625 284.878906 244.179688 292.078125 246.890625 C 299.28125 249.601562 305.371094 252.980469 310.371094 257.050781 C 315.359375 261.109375 319.21875 265.980469 321.929688 271.648438 C 324.628906 277.328125 325.988281 284.308594 325.988281 292.609375 Z M 325.988281 292.609375 " style={{stroke:"none",fillRule:"nonzero", fill:"rgb(100%,53.72549%,0%)",fillOpacity:"1"}} />
                                                                                    </g>
                                                                                </svg>	
                                                                           : item.id === 12 ?
                                                                            
                                                                                <svg xmlns="http://www.w3.org/2000/svg" height="512pt" version="1.1" viewBox="0 0 512 512" width="512pt">
                                                                                    <g id="surface1">
                                                                                    <path d="M 512 256 C 512 324.378906 485.371094 388.671875 437.019531 437.019531 C 388.671875 485.371094 324.378906 512 256 512 C 187.621094 512 123.328125 485.371094 74.980469 437.019531 C 26.628906 388.671875 0 324.378906 0 256 C 0 187.621094 26.628906 123.328125 74.980469 74.980469 C 123.328125 26.628906 187.621094 0 256 0 C 324.378906 0 388.671875 26.628906 437.019531 74.980469 C 485.371094 123.328125 512 187.621094 512 256 Z M 512 256 " style={{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,66.666667%,12.54902%)",fillOpacity:"1"}}/>
                                                                                    <path d="M 512 256 C 512 324.378906 485.371094 388.671875 437.019531 437.019531 C 388.671875 485.371094 324.378906 512 256 512 L 256 0 C 324.378906 0 388.671875 26.628906 437.019531 74.980469 C 485.371094 123.328125 512 187.621094 512 256 Z M 512 256 " style={{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,53.72549%,0%)",fillOpacity:"1"}} />
                                                                                    <path d="M 458 256 C 458 278.53125 454.289062 300.210938 447.449219 320.46875 C 443.941406 330.871094 439.601562 340.898438 434.511719 350.46875 C 400.558594 414.378906 333.269531 458 256 458 C 178.730469 458 111.441406 414.378906 77.488281 350.46875 C 72.398438 340.898438 68.058594 330.871094 64.550781 320.46875 C 57.710938 300.210938 54 278.53125 54 256 C 54 144.621094 144.621094 54 256 54 C 367.378906 54 458 144.621094 458 256 Z M 458 256 " style={{stroke:"none",fillRule:"nonzero", fill:"rgb(100%,92.54902%,59.215686%)", fillOpacity:"1"}} />
                                                                                    <path d="M 458 256 C 458 367.378906 367.378906 458 256 458 L 256 54 C 367.378906 54 458 144.621094 458 256 Z M 458 256 " style={{stroke:"none",fillRule:"nonzero",fill:"rgb(100%,85.882353%,17.647059%)",fillOpacity:"1"}} />
                                                                                    <path d="M 447.449219 320.46875 C 447.070312 321.601562 446.679688 322.730469 446.269531 323.851562 C 446.148438 324.210938 446.011719 324.578125 445.878906 324.941406 C 445.828125 325.089844 445.769531 325.238281 445.71875 325.378906 C 445.378906 326.320312 445.019531 327.261719 444.660156 328.199219 C 444.359375 329 444.050781 329.789062 443.71875 330.578125 C 443.5 331.148438 443.28125 331.71875 443.039062 332.28125 C 442.941406 332.550781 442.828125 332.808594 442.710938 333.078125 C 442.339844 333.988281 441.960938 334.890625 441.570312 335.78125 C 441.101562 336.878906 440.621094 337.96875 440.128906 339.050781 C 439.988281 339.351562 439.859375 339.648438 439.71875 339.941406 C 439.300781 340.859375 438.871094 341.78125 438.441406 342.691406 C 438.308594 342.960938 438.179688 343.230469 438.050781 343.5 C 437.5 344.628906 436.949219 345.75 436.378906 346.859375 C 435.769531 348.070312 435.148438 349.269531 434.511719 350.46875 L 329.21875 350.46875 L 329.21875 235.171875 L 256 321.460938 L 255.988281 321.46875 L 182.761719 235.171875 L 182.761719 350.46875 L 77.488281 350.46875 C 72.398438 340.898438 68.058594 330.871094 64.550781 320.46875 L 152.761719 320.46875 L 152.761719 153.449219 L 255.988281 275.109375 L 256 275.101562 L 359.21875 153.449219 L 359.21875 320.46875 Z M 447.449219 320.46875 " style={{stroke:"none", fillRule:"nonzero", fill:"rgb(0%,86.666667%,75.686275%)", fillOpacity:"1"}} />
                                                                                    <path d="M 447.449219 320.46875 C 447.070312 321.601562 446.679688 322.730469 446.269531 323.851562 C 446.148438 324.210938 446.011719 324.578125 445.878906 324.941406 C 445.828125 325.089844 445.769531 325.238281 445.71875 325.378906 C 445.378906 326.320312 445.019531 327.261719 444.660156 328.199219 C 444.359375 329 444.050781 329.789062 443.71875 330.578125 C 443.5 331.148438 443.28125 331.71875 443.039062 332.28125 C 442.941406 332.550781 442.828125 332.808594 442.710938 333.078125 C 442.339844 333.988281 441.960938 334.890625 441.570312 335.78125 C 441.101562 336.878906 440.621094 337.96875 440.128906 339.050781 C 439.988281 339.351562 439.859375 339.648438 439.71875 339.941406 C 439.300781 340.859375 438.871094 341.78125 438.441406 342.691406 C 438.308594 342.960938 438.179688 343.230469 438.050781 343.5 C 437.5 344.628906 436.949219 345.75 436.378906 346.859375 C 435.769531 348.070312 435.148438 349.269531 434.511719 350.46875 L 329.21875 350.46875 L 329.21875 235.171875 L 256 321.460938 L 256 275.101562 L 359.21875 153.449219 L 359.21875 320.46875 Z M 447.449219 320.46875 " style={{stroke:"none", fillRule:"nonzero", fill:"rgb(0%,67.058824%,58.039216%)", fillOpacity:"1"}} />
                                                                                    </g>
                                                                                </svg>
                                                                            : item.id === 13 ?
                                                                            
                                                                                <svg height="512" viewBox="0 0 48 48" width="512" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g id="Line"><path d="m28.121 17.793c-2.171 2.254-6.071 2.254-8.242 0 0 0-3.293-3.293-3.293-3.293h-2.172l5.172 5.172c2.325 2.421 6.503 2.421 8.828 0 0 0 5.172-5.172 5.172-5.172h-2.172z"/><path d="m24 2c-12.131 0-22 9.869-22 22 1.208 29.186 42.796 29.178 44 0 0-12.131-9.869-22-22-22zm12.924 32.883c-.154.373-.52.617-.924.617h-5c-.266 0-.52-.105-.707-.293l-3.586-3.586c-1.427-1.48-3.988-1.48-5.414 0 0 0-3.586 3.586-3.586 3.586-.187.188-.441.293-.707.293h-5c-.861.028-1.341-1.116-.707-1.707 0 0 6.879-6.879 6.879-6.879 3.07-3.197 8.587-3.198 11.656 0 0 0 6.879 6.879 6.879 6.879.286.286.372.716.217 1.09zm-.217-20.676-6.879 6.879c-3.07 3.197-8.587 3.198-11.656 0 0 0-6.879-6.879-6.879-6.879-.629-.59-.16-1.736.707-1.707h5c.266 0 .52.105.707.293l3.586 3.586c.713.712 1.699 1.121 2.707 1.121s1.994-.409 2.707-1.121l3.586-3.586c.187-.188.441-.293.707-.293h5c.861-.028 1.341 1.116.707 1.707z"/><path d="m24 26.5c-1.667 0-3.234.649-4.414 1.828l-5.172 5.172h2.172l3.293-3.293c1.085-1.085 2.587-1.707 4.121-1.707s3.036.622 4.121 1.707l3.293 3.293h2.172l-5.172-5.172c-1.18-1.179-2.747-1.828-4.414-1.828z"/></g>
                                                                                </svg>
                                                                            : item.id === 14 ? 
                                                                            
                                                                                <svg id="Layer_2" height="512" viewBox="0 0 70 70" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
                                                                                    <path d="m42.8 44.76h-13.64l14.45-19.93a1 1 0 0 0 -.81-1.59h-6.8v-3a1 1 0 0 0 -2 0v3h-6.8a1 1 0 0 0 0 2h13.64l-14.45 19.93a1 1 0 0 0 .81 1.59h6.8v3a1 1 0 0 0 2 0v-3h6.8a1 1 0 0 0 0-2z"/><path d="m35 .5a34.5 34.5 0 1 0 34.5 34.5 34.54 34.54 0 0 0 -34.5-34.5zm0 67a32.5 32.5 0 1 1 32.5-32.5 32.54 32.54 0 0 1 -32.5 32.5z"/><path d="m35 8.5a26.5 26.5 0 1 0 26.5 26.5 26.53 26.53 0 0 0 -26.5-26.5zm0 51a24.5 24.5 0 1 1 24.5-24.5 24.53 24.53 0 0 1 -24.5 24.5z"/>
                                                                                </svg>
                                                                            : item.id === 15 ? 
                                                                            
                                                                                <svg id="Layer_1"  enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                                                                    <g><circle cx="256" cy="256" fill="#4793ff" r="256"/><path d="m256 0c141.159 0 256 114.841 256 256s-114.841 256-256 256z" fill="#5e69e2"/><circle cx="256" cy="256" fill="#2ebeef" r="191.733"/><path d="m256 64.267c105.722 0 191.733 86.011 191.733 191.733s-86.011 191.733-191.733 191.733z" fill="#4793ff"/><g><path d="m243.519 127.179-80.333 120.5c-3.359 5.038-3.359 11.603 0 16.641l80.333 120.5c5.937 8.906 19.024 8.906 24.962 0l80.333-120.5c3.359-5.038 3.359-11.603 0-16.641l-80.333-120.5c-5.938-8.906-19.024-8.906-24.962 0z" fill="#76e5f6"/><path d="m256 275.375v116.125c4.756 0 9.512-2.226 12.481-6.679l80.333-120.5c1.562-2.343 2.388-5.015 2.497-7.711l-92.37 18.474c-.97.194-1.956.291-2.941.291z" fill="#2ebeef"/><path d="m256 120.5c-4.756 0-9.512 2.226-12.481 6.679l-80.333 120.5c-1.797 2.696-2.623 5.828-2.497 8.931l92.369 18.474c.971.194 1.957.291 2.942.291z" fill="#c2f4fb"/></g></g>
                                                                                </svg>
                                                                            
                                                                            : item.id === 16 ? 
                                                                                <svg id="Capa_1"  enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m437.019 74.98c-48.352-48.352-112.639-74.98-181.019-74.98s-132.667 26.628-181.019 74.98c-48.352 48.354-74.981 112.641-74.981 181.02s26.629 132.666 74.981 181.02c48.352 48.352 112.64 74.98 181.019 74.98 22.775 0 45.34-2.97 67.067-8.83 3.97-1.07 6.321-5.157 5.25-9.127-1.071-3.969-5.158-6.324-9.127-5.25-20.464 5.518-41.724 8.316-63.19 8.316-64.402 0-124.95-25.08-170.49-70.619-45.54-45.54-70.619-106.089-70.619-170.49s25.079-124.95 70.619-170.49 106.087-70.619 170.49-70.619 124.951 25.08 170.49 70.619 70.619 106.089 70.619 170.49-25.079 124.95-70.619 170.49c-22.021 22.02-47.5 39.301-75.73 51.364-3.781 1.615-5.537 5.99-3.921 9.772 1.616 3.78 5.99 5.538 9.772 3.921 29.985-12.812 57.038-31.158 80.409-54.526 48.351-48.355 74.98-112.642 74.98-181.021s-26.629-132.666-74.981-181.02z"/><path d="m93.173 125.146c-3.293-2.466-7.958-1.793-10.422 1.499-28.158 37.62-43.042 82.35-43.042 129.355 0 119.263 97.028 216.291 216.291 216.291s216.291-97.028 216.291-216.291-97.028-216.291-216.291-216.291c-55.922 0-109.014 21.349-149.496 60.115-2.969 2.844-3.072 7.557-.228 10.527 2.844 2.968 7.556 3.072 10.527.228 37.697-36.098 87.131-55.979 139.197-55.979 111.052 0 201.4 90.348 201.4 201.4s-90.348 201.4-201.4 201.4-201.4-90.348-201.4-201.4c0-43.763 13.857-85.408 40.072-120.432 2.464-3.293 1.793-7.959-1.499-10.422z"/><path d="m141.186 346.889c3.883 4.853 9.675 7.636 15.89 7.636h139.271c18.446 0 36.538-6.347 50.941-17.872s24.563-27.784 28.609-45.781l12.858-57.2c4.965-22.086-.3-44.893-14.444-62.57s-35.24-27.815-57.879-27.815h-121.021c-9.588 0-17.752 6.533-19.855 15.888l-13.861 61.664h-32.581c-7.529 0-14.064 5.101-15.89 12.404l-7.025 28.081c-1.035 4.139-.123 8.44 2.502 11.802 2.624 3.362 6.576 5.29 10.841 5.29h29.21l-11.531 51.294c-1.364 6.065.081 12.326 3.965 17.179zm-13.517-110.032c.166-.664.76-1.127 1.445-1.127h136.733l-6.672 26.669c-.166.664-.76 1.128-1.444 1.128h-136.734zm80.097 41.56h49.964c7.528 0 14.063-5.1 15.89-12.404l7.025-28.081c1.035-4.139.123-8.44-2.502-11.802-2.624-3.362-6.576-5.29-10.841-5.29h-46.594l4.49-19.973h90.692c5.298 0 10.144 2.188 13.295 6.004 3.286 3.98 4.523 9.146 3.392 14.175l-12.858 57.199c-2.476 11.012-12.087 18.703-23.374 18.703h-92.746zm-15.262 0-4.929 21.923c-.631 2.81.039 5.711 1.839 7.959 1.8 2.249 4.484 3.539 7.364 3.539h99.57c18.302 0 33.888-12.471 37.902-30.328l12.858-57.199c2.148-9.554-.199-19.367-6.438-26.923-5.99-7.254-15.021-11.413-24.778-11.413h-95.062c-4.444 0-8.228 3.029-9.201 7.363l-6.182 27.501h-28.491l13.128-58.398c.564-2.509 2.755-4.262 5.327-4.262h121.021c18.091 0 34.95 8.102 46.253 22.227 11.303 14.127 15.51 32.352 11.542 50.002l-12.858 57.2c-3.307 14.71-11.611 27.999-23.384 37.419s-26.56 14.608-41.638 14.608h-139.271c-2.283 0-3.651-1.284-4.263-2.048-.613-.766-1.565-2.382-1.064-4.61l12.265-54.559h28.49z"/></g></svg>
                                                                            : ''
                                                                            }
                                                                        </div>
                                                                        <h5 className="mb-0 ms-2"> {item.title1}</h5>
                                                                        <span className="text-muted ms-2"> {item.title2}</span>
                                                                    </Link>
                                                                </td>
                                                                <td>{item.price}</td>
                                                                <td className={`${index===3 || index===4 ? "text-danger" : "text-success"} `}>{item.change}</td>
                                                                <td>{item.volume}</td>
                                                                <td>{item.cap}</td>
                                                                <td className="text-end"><Link href={"#"}>Trade</Link></td>
                                                            </tr>
                                                        ))}
                                                        
                                                    </tbody>
                                                </table>
                                                <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
                                                    <div className="dataTables_info">
                                                        Showing {activePag.current * sort + 1} to{" "}
                                                        {data.length > (activePag.current + 1) * sort
                                                            ? (activePag.current + 1) * sort
                                                            : data.length}{" "}
                                                        of {data.length} entries
                                                    </div>
                                                    <div
                                                        className="dataTables_paginate paging_simple_numbers mb-0"
                                                        id="application-tbl1_paginate"
                                                    >
                                                        <Link
                                                            className="paginate_button previous "
                                                            href="/market"
                                                            onClick={() =>
                                                                activePag.current > 0 &&
                                                                onClick(activePag.current - 1)
                                                            }
                                                            >
                                                            <i className="fa fa-angle-double-left" ></i> 
                                                        </Link>
                                                        <span>
                                                            {paggination.map((number, i) => (
                                                                <Link
                                                                    key={i}
                                                                    href="/market"
                                                                    className={`paginate_button  ${
                                                                        activePag.current === i ? "current" : ""
                                                                    } `}
                                                                    onClick={() => onClick(i)}
                                                                >
                                                                    {number}
                                                                </Link>
                                                            ))}
                                                        </span>

                                                        <Link
                                                            className="paginate_button next"
                                                            href="/market"
                                                            onClick={() =>
                                                                activePag.current + 1 < paggination.length &&
                                                                onClick(activePag.current + 1)
                                                            }
                                                        >
                                                            <i className="fa fa-angle-double-right" ></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Spot">
                                        {/* <SpotTable /> */}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Future">
                                        {/* <FutureTable />  */}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="Listing">
                                        {/* <ListingTable /> */}
                                    </Tab.Pane>

                                </Tab.Content>
                            </div>
                        </Tab.Container>  
                    </div>
                </div>    
                    

            </div>    
        </>
    )
}
export default Market;
// import React, { useEffect, useState, useRef } from "react";
// // import {Link} from 'react-router-dom';

// import { Tab, Nav } from "react-bootstrap";

// // import SpotTable from './Market/SpotTable';
// // import FutureTable from './Market/FutureTable';
// // import ListingTable from './Market/ListingTable';
// import Link from "next/link";
// import "../../assets/css/style.css";
// const cardBlog = [
//   { title: "Gainers" },
//   { title: "Loosers" },
//   { title: "Highlites" },
//   { title: "Listing" },
// ];

// const tableData = [
//   {
//     id: 11,
//     title1: "ZEC",
//     title2: "ZCash",
//     price: "$0.9632",
//     change: "+9%",
//     volume: "96,525.00",
//     cap: "$18M",
//   },
//   {
//     id: 12,
//     title1: "AUD",
//     title2: "Australian Doller",
//     price: "$0.6932",
//     change: "+22%",
//     volume: "30,585.00",
//     cap: "$96M",
//   },
//   {
//     id: 13,
//     title1: "ETH",
//     title2: "Etherium Classic",
//     price: "$0.6258",
//     change: "+40%",
//     volume: "80,752.00",
//     cap: "$22M",
//   },
//   {
//     id: 14,
//     title1: "XRP",
//     title2: "Ripplecoin",
//     price: "$0.6258",
//     change: "-11%",
//     volume: "80,752.00",
//     cap: "$22M",
//   },
//   {
//     id: 15,
//     title1: "XMR",
//     title2: "Monero",
//     price: "$0.3685",
//     change: "-8%",
//     volume: "75,52.00",
//     cap: "$30M",
//   },
//   {
//     id: 16,
//     title1: "Dash",
//     title2: "Dash",
//     price: "$0.1478",
//     change: "+11%",
//     volume: "14,752.00",
//     cap: "$9M",
//   },
// ];

// const market = () => {
//   const [data, setData] =
//     useState();
//     document.querySelectorAll("#market_wrapper tbody tr")
//   const sort = 6;
//   const activePag = useRef(0);
//   const [test, settest] = useState(0);

//   // Active data
//   const chageData = (frist, sec) => {
//     for (var i = 0; i < data.length; ++i) {
//       if (i >= frist && i < sec) {
//         data[i].classList.remove("d-none");
//       } else {
//         data[i].classList.add("d-none");
//       }
//     }
//   };
//   // use effect
//   useEffect(() => {
//     setData(document.querySelectorAll("#market_wrapper tbody tr"));
//     //chackboxFun();
//   }, [test]);

//   // Active pagginarion
//   activePag.current === 0 && chageData(0, sort);
//   // paggination
//   let paggination = Array(Math.ceil(data.length / sort))
//     .fill()
//     .map((_, i) => i + 1);

//   // Active paggination & chage data
//   const onClick = (i) => {
//     activePag.current = i;
//     chageData(activePag.current * sort, (activePag.current + 1) * sort);
//     settest(i);
//   };

//   return (
//     <>
//       <div className=" bg-white p-5 w-full relative -z-10">
//         <div className="col-xl-12">
//           <div className="row">
//             {cardBlog.map((item, index) => (
//               <div className="col-xl-3 col-lg-6 col-md-12" key={index}>
//                 <div className="card">
//                   <div className="card-body py-3">
//                     <h4 className="fs-18 mb-3">Top {item.title}</h4>
//                     <div className="market-list d-flex align-items-center justify-content-between mb-2">
//                       <Link
//                         href={"#"}
//                         className="market-title d-flex align-items-center"
//                       >
//                         <div className="market-icon bg-warning">
//                           <i className="fa-solid fa-bitcoin-sign"></i>
//                         </div>
//                         <h5 className="mb-0 ms-2">BTC</h5>
//                       </Link>
//                       <span className="fs-14">273</span>
//                       <span className="fs-14 text-success">+35.56%</span>
//                     </div>
//                     <div className="market-list d-flex align-items-center justify-content-between mb-2">
//                       <Link
//                         href={"#"}
//                         className="market-title d-flex align-items-center"
//                       >
//                         <div className="market-icon bg-primary">
//                           <i className="fa-brands fa-ethereum"></i>
//                         </div>
//                         <h5 className="mb-0 ms-2">ETH</h5>
//                       </Link>
//                       <span className="fs-14">150</span>
//                       <span className="fs-14 text-success">+25.25%</span>
//                     </div>
//                     <div className="market-list d-flex align-items-center justify-content-between mb-2">
//                       <Link
//                         href={"#"}
//                         className="market-title d-flex align-items-center"
//                       >
//                         <div className="market-icon bg-danger">
//                           <i className="fa-solid fa-litecoin-sign"></i>
//                         </div>
//                         <h5 className="mb-0 ms-2">LTC</h5>
//                       </Link>
//                       <span className="fs-14">150</span>
//                       <span className="fs-14 text-success">+25.25%</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="col-xl-12">
//           <div className="card">
//             <Tab.Container defaultActiveKey="All">
//               <div className="card-header border-0">
//                 <Nav
//                   as="ul"
//                   className="order  nav-tabs"
//                   id="pills-tab"
//                   role="tablist"
//                 >
//                   <Nav.Item as="li" className=" my-1" role="presentation">
//                     <Nav.Link as="button" eventKey="All" type="button">
//                       All Cryptos
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item as="li" className=" my-1" role="presentation">
//                     <Nav.Link as="button" eventKey="Spot" type="button">
//                       Spot Markets
//                     </Nav.Link>
//                   </Nav.Item>
//                   {/* <Nav.Item as="li" className=" my-1" role="presentation">
//                     <Nav.Link as="button" eventKey="Future" type="button">
//                       Future Markets
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item as="li" className=" my-1" role="presentation">
//                     <Nav.Link
//                       as="button"
//                       className="me-0"
//                       eventKey="Listing"
//                       type="button"
//                     >
//                       New Listing
//                     </Nav.Link>
//                   </Nav.Item> */}
//                 </Nav>
//               </div>
//               <div className="card-body pt-0">
//                 <Tab.Content className="tab-content">
//                   <Tab.Pane eventKey="All">
//                     <div className="table-responsive dataTablemarket">
//                       <div
//                         id="market_wrapper"
//                         className="dataTables_wrapper no-footer"
//                       >
//                         <table
//                           className="table dataTable  shadow-hover display"
//                           style={{ minWidth: "845px" }}
//                         >
//                           <thead>
//                             <tr>
//                               <th>Name</th>
//                               <th className="text-center">Price</th>
//                               <th className="text-center">Change</th>
//                               <th className="text-center">24 Volume</th>
//                               <th className="text-center">Market Cap</th>
//                               <th className="text-end">Action</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {tableData.map((item, index) => (
//                               <tr key={index}>
//                                 <td>
//                                   <Link
//                                     href={"#"}
//                                     className="market-title d-flex align-items-center"
//                                   >
//                                     <div
//                                       className={` market-icon ${
//                                         index === 5
//                                           ? "bg-success"
//                                           : "bg-warning"
//                                       }`}
//                                     >
//                                       {item.id === 11 ? (
//                                         <svg
//                                           xmlns="http://www.w3.org/2000/svg"
//                                           height="512pt"
//                                           version="1.1"
//                                           viewBox="0 0 512 512"
//                                           width="512pt"
//                                         >
//                                           <g id="surface1">
//                                             <path
//                                               d="M 512 256 C 512 324.378906 485.371094 388.671875 437.019531 437.019531 C 388.671875 485.371094 324.378906 512 256 512 C 187.621094 512 123.328125 485.371094 74.980469 437.019531 C 26.628906 388.671875 0 324.378906 0 256 C 0 187.621094 26.628906 123.328125 74.980469 74.980469 C 123.328125 26.628906 187.621094 0 256 0 C 324.378906 0 388.671875 26.628906 437.019531 74.980469 C 485.371094 123.328125 512 187.621094 512 256 Z M 512 256 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,66.666667%,12.54902%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 512 256 C 512 324.378906 485.371094 388.671875 437.019531 437.019531 C 388.671875 485.371094 324.378906 512 256 512 L 256 0 C 324.378906 0 388.671875 26.628906 437.019531 74.980469 C 485.371094 123.328125 512 187.621094 512 256 Z M 512 256 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,53.72549%,0%)",
//                                                 fillOopacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 458 256 C 458 367.378906 367.378906 458 256 458 C 144.621094 458 54 367.378906 54 256 C 54 144.621094 144.621094 54 256 54 C 367.378906 54 458 144.621094 458 256 Z M 458 256 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,92.54902%,59.215686%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 458 256 C 458 367.378906 367.378906 458 256 458 L 256 54 C 367.378906 54 458 144.621094 458 256 Z M 458 256 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,85.882353%,17.647059%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 325.988281 292.609375 C 325.988281 302.261719 324.171875 310.511719 320.53125 317.371094 C 316.890625 324.230469 311.980469 329.78125 305.800781 334.011719 C 299.621094 338.238281 292.5 341.328125 284.460938 343.28125 C 280.058594 344.339844 275.539062 345.109375 270.910156 345.589844 L 270.910156 380.550781 L 240.910156 380.550781 L 240.910156 344.929688 C 233.570312 343.921875 226.289062 342.328125 219.058594 340.101562 C 205.851562 336.039062 194 330.28125 183.5 322.828125 L 198.988281 292.609375 C 200.519531 294.128906 203.269531 296.121094 207.25 298.570312 C 211.21875 301.03125 215.921875 303.488281 221.339844 305.941406 C 226.761719 308.398438 232.769531 310.46875 239.378906 312.160156 C 244.800781 313.558594 250.339844 314.371094 256 314.609375 C 257.230469 314.671875 258.460938 314.699219 259.699219 314.699219 C 279 314.699219 288.648438 308.519531 288.648438 296.160156 C 288.648438 292.269531 287.550781 288.96875 285.351562 286.261719 C 283.148438 283.550781 280.019531 281.179688 275.949219 279.140625 C 271.890625 277.109375 266.980469 275.25 261.21875 273.558594 C 259.539062 273.058594 257.800781 272.550781 256 272.03125 C 251.648438 270.761719 246.949219 269.410156 241.921875 267.96875 C 233.28125 265.601562 225.789062 263.011719 219.441406 260.21875 C 213.089844 257.429688 207.789062 254.121094 203.558594 250.308594 C 199.328125 246.5 196.148438 242.101562 194.039062 237.109375 C 191.921875 232.109375 190.859375 226.148438 190.859375 219.199219 C 190.859375 210.058594 192.550781 201.929688 195.941406 194.820312 C 199.328125 187.699219 204.03125 181.78125 210.039062 177.039062 C 216.050781 172.300781 223.03125 168.699219 231 166.238281 C 234.199219 165.25 237.511719 164.46875 240.910156 163.878906 L 240.910156 131.199219 L 270.910156 131.199219 L 270.910156 163.460938 C 278.21875 164.398438 285.148438 166.089844 291.699219 168.53125 C 302.371094 172.511719 311.679688 177.210938 319.640625 182.621094 L 304.148438 211.070312 C 302.960938 209.890625 300.800781 208.28125 297.671875 206.25 C 294.539062 204.210938 290.71875 202.230469 286.238281 200.28125 C 281.75 198.328125 276.878906 196.679688 271.640625 195.320312 C 266.5 194 261.289062 193.320312 256 193.300781 C 255.878906 193.289062 255.75 193.289062 255.628906 193.289062 C 245.980469 193.289062 238.78125 195.070312 234.039062 198.628906 C 229.300781 202.179688 226.929688 207.179688 226.929688 213.609375 C 226.929688 217.339844 227.820312 220.429688 229.601562 222.878906 C 231.378906 225.339844 233.960938 227.5 237.351562 229.359375 C 240.730469 231.230469 245 232.921875 250.171875 234.441406 C 252.011719 234.980469 253.949219 235.539062 256 236.101562 C 259.691406 237.121094 263.710938 238.179688 268.078125 239.269531 C 276.878906 241.640625 284.878906 244.179688 292.078125 246.890625 C 299.28125 249.601562 305.371094 252.980469 310.371094 257.050781 C 315.359375 261.109375 319.21875 265.980469 321.929688 271.648438 C 324.628906 277.328125 325.988281 284.308594 325.988281 292.609375 Z M 325.988281 292.609375 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,66.666667%,12.54902%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 271.640625 195.320312 C 266.5 194 261.289062 193.320312 256 193.300781 L 256 131.199219 L 270.910156 131.199219 L 270.910156 163.460938 C 278.21875 164.398438 285.148438 166.089844 291.699219 168.53125 C 302.371094 172.511719 311.679688 177.210938 319.640625 182.621094 L 304.148438 211.070312 C 302.960938 209.890625 300.800781 208.28125 297.671875 206.25 C 294.539062 204.210938 290.71875 202.230469 286.238281 200.28125 C 281.75 198.328125 276.878906 196.679688 271.640625 195.320312 Z M 271.640625 195.320312 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,53.72549%,0%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 325.988281 292.609375 C 325.988281 302.261719 324.171875 310.511719 320.53125 317.371094 C 316.890625 324.230469 311.980469 329.78125 305.800781 334.011719 C 299.621094 338.238281 292.5 341.328125 284.460938 343.28125 C 280.058594 344.339844 275.539062 345.109375 270.910156 345.589844 L 270.910156 380.550781 L 256 380.550781 L 256 314.609375 C 257.230469 314.671875 258.460938 314.699219 259.699219 314.699219 C 279 314.699219 288.648438 308.519531 288.648438 296.160156 C 288.648438 292.269531 287.550781 288.96875 285.351562 286.261719 C 283.148438 283.550781 280.019531 281.179688 275.949219 279.140625 C 271.890625 277.109375 266.980469 275.25 261.21875 273.558594 C 259.539062 273.058594 257.800781 272.550781 256 272.03125 L 256 236.101562 C 259.691406 237.121094 263.710938 238.179688 268.078125 239.269531 C 276.878906 241.640625 284.878906 244.179688 292.078125 246.890625 C 299.28125 249.601562 305.371094 252.980469 310.371094 257.050781 C 315.359375 261.109375 319.21875 265.980469 321.929688 271.648438 C 324.628906 277.328125 325.988281 284.308594 325.988281 292.609375 Z M 325.988281 292.609375 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,53.72549%,0%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                           </g>
//                                         </svg>
//                                       ) : item.id === 12 ? (
//                                         <svg
//                                           xmlns="http://www.w3.org/2000/svg"
//                                           height="512pt"
//                                           version="1.1"
//                                           viewBox="0 0 512 512"
//                                           width="512pt"
//                                         >
//                                           <g id="surface1">
//                                             <path
//                                               d="M 512 256 C 512 324.378906 485.371094 388.671875 437.019531 437.019531 C 388.671875 485.371094 324.378906 512 256 512 C 187.621094 512 123.328125 485.371094 74.980469 437.019531 C 26.628906 388.671875 0 324.378906 0 256 C 0 187.621094 26.628906 123.328125 74.980469 74.980469 C 123.328125 26.628906 187.621094 0 256 0 C 324.378906 0 388.671875 26.628906 437.019531 74.980469 C 485.371094 123.328125 512 187.621094 512 256 Z M 512 256 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,66.666667%,12.54902%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 512 256 C 512 324.378906 485.371094 388.671875 437.019531 437.019531 C 388.671875 485.371094 324.378906 512 256 512 L 256 0 C 324.378906 0 388.671875 26.628906 437.019531 74.980469 C 485.371094 123.328125 512 187.621094 512 256 Z M 512 256 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,53.72549%,0%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 458 256 C 458 278.53125 454.289062 300.210938 447.449219 320.46875 C 443.941406 330.871094 439.601562 340.898438 434.511719 350.46875 C 400.558594 414.378906 333.269531 458 256 458 C 178.730469 458 111.441406 414.378906 77.488281 350.46875 C 72.398438 340.898438 68.058594 330.871094 64.550781 320.46875 C 57.710938 300.210938 54 278.53125 54 256 C 54 144.621094 144.621094 54 256 54 C 367.378906 54 458 144.621094 458 256 Z M 458 256 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,92.54902%,59.215686%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 458 256 C 458 367.378906 367.378906 458 256 458 L 256 54 C 367.378906 54 458 144.621094 458 256 Z M 458 256 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(100%,85.882353%,17.647059%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 447.449219 320.46875 C 447.070312 321.601562 446.679688 322.730469 446.269531 323.851562 C 446.148438 324.210938 446.011719 324.578125 445.878906 324.941406 C 445.828125 325.089844 445.769531 325.238281 445.71875 325.378906 C 445.378906 326.320312 445.019531 327.261719 444.660156 328.199219 C 444.359375 329 444.050781 329.789062 443.71875 330.578125 C 443.5 331.148438 443.28125 331.71875 443.039062 332.28125 C 442.941406 332.550781 442.828125 332.808594 442.710938 333.078125 C 442.339844 333.988281 441.960938 334.890625 441.570312 335.78125 C 441.101562 336.878906 440.621094 337.96875 440.128906 339.050781 C 439.988281 339.351562 439.859375 339.648438 439.71875 339.941406 C 439.300781 340.859375 438.871094 341.78125 438.441406 342.691406 C 438.308594 342.960938 438.179688 343.230469 438.050781 343.5 C 437.5 344.628906 436.949219 345.75 436.378906 346.859375 C 435.769531 348.070312 435.148438 349.269531 434.511719 350.46875 L 329.21875 350.46875 L 329.21875 235.171875 L 256 321.460938 L 255.988281 321.46875 L 182.761719 235.171875 L 182.761719 350.46875 L 77.488281 350.46875 C 72.398438 340.898438 68.058594 330.871094 64.550781 320.46875 L 152.761719 320.46875 L 152.761719 153.449219 L 255.988281 275.109375 L 256 275.101562 L 359.21875 153.449219 L 359.21875 320.46875 Z M 447.449219 320.46875 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(0%,86.666667%,75.686275%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                             <path
//                                               d="M 447.449219 320.46875 C 447.070312 321.601562 446.679688 322.730469 446.269531 323.851562 C 446.148438 324.210938 446.011719 324.578125 445.878906 324.941406 C 445.828125 325.089844 445.769531 325.238281 445.71875 325.378906 C 445.378906 326.320312 445.019531 327.261719 444.660156 328.199219 C 444.359375 329 444.050781 329.789062 443.71875 330.578125 C 443.5 331.148438 443.28125 331.71875 443.039062 332.28125 C 442.941406 332.550781 442.828125 332.808594 442.710938 333.078125 C 442.339844 333.988281 441.960938 334.890625 441.570312 335.78125 C 441.101562 336.878906 440.621094 337.96875 440.128906 339.050781 C 439.988281 339.351562 439.859375 339.648438 439.71875 339.941406 C 439.300781 340.859375 438.871094 341.78125 438.441406 342.691406 C 438.308594 342.960938 438.179688 343.230469 438.050781 343.5 C 437.5 344.628906 436.949219 345.75 436.378906 346.859375 C 435.769531 348.070312 435.148438 349.269531 434.511719 350.46875 L 329.21875 350.46875 L 329.21875 235.171875 L 256 321.460938 L 256 275.101562 L 359.21875 153.449219 L 359.21875 320.46875 Z M 447.449219 320.46875 "
//                                               style={{
//                                                 stroke: "none",
//                                                 fillRule: "nonzero",
//                                                 fill: "rgb(0%,67.058824%,58.039216%)",
//                                                 fillOpacity: "1",
//                                               }}
//                                             />
//                                           </g>
//                                         </svg>
//                                       ) : item.id === 13 ? (
//                                         <svg
//                                           height="512"
//                                           viewBox="0 0 48 48"
//                                           width="512"
//                                           xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                           <g id="Line">
//                                             <path d="m28.121 17.793c-2.171 2.254-6.071 2.254-8.242 0 0 0-3.293-3.293-3.293-3.293h-2.172l5.172 5.172c2.325 2.421 6.503 2.421 8.828 0 0 0 5.172-5.172 5.172-5.172h-2.172z" />
//                                             <path d="m24 2c-12.131 0-22 9.869-22 22 1.208 29.186 42.796 29.178 44 0 0-12.131-9.869-22-22-22zm12.924 32.883c-.154.373-.52.617-.924.617h-5c-.266 0-.52-.105-.707-.293l-3.586-3.586c-1.427-1.48-3.988-1.48-5.414 0 0 0-3.586 3.586-3.586 3.586-.187.188-.441.293-.707.293h-5c-.861.028-1.341-1.116-.707-1.707 0 0 6.879-6.879 6.879-6.879 3.07-3.197 8.587-3.198 11.656 0 0 0 6.879 6.879 6.879 6.879.286.286.372.716.217 1.09zm-.217-20.676-6.879 6.879c-3.07 3.197-8.587 3.198-11.656 0 0 0-6.879-6.879-6.879-6.879-.629-.59-.16-1.736.707-1.707h5c.266 0 .52.105.707.293l3.586 3.586c.713.712 1.699 1.121 2.707 1.121s1.994-.409 2.707-1.121l3.586-3.586c.187-.188.441-.293.707-.293h5c.861-.028 1.341 1.116.707 1.707z" />
//                                             <path d="m24 26.5c-1.667 0-3.234.649-4.414 1.828l-5.172 5.172h2.172l3.293-3.293c1.085-1.085 2.587-1.707 4.121-1.707s3.036.622 4.121 1.707l3.293 3.293h2.172l-5.172-5.172c-1.18-1.179-2.747-1.828-4.414-1.828z" />
//                                           </g>
//                                         </svg>
//                                       ) : item.id === 14 ? (
//                                         <svg
//                                           id="Layer_2"
//                                           height="512"
//                                           viewBox="0 0 70 70"
//                                           width="512"
//                                           xmlns="http://www.w3.org/2000/svg"
//                                           data-name="Layer 2"
//                                         >
//                                           <path d="m42.8 44.76h-13.64l14.45-19.93a1 1 0 0 0 -.81-1.59h-6.8v-3a1 1 0 0 0 -2 0v3h-6.8a1 1 0 0 0 0 2h13.64l-14.45 19.93a1 1 0 0 0 .81 1.59h6.8v3a1 1 0 0 0 2 0v-3h6.8a1 1 0 0 0 0-2z" />
//                                           <path d="m35 .5a34.5 34.5 0 1 0 34.5 34.5 34.54 34.54 0 0 0 -34.5-34.5zm0 67a32.5 32.5 0 1 1 32.5-32.5 32.54 32.54 0 0 1 -32.5 32.5z" />
//                                           <path d="m35 8.5a26.5 26.5 0 1 0 26.5 26.5 26.53 26.53 0 0 0 -26.5-26.5zm0 51a24.5 24.5 0 1 1 24.5-24.5 24.53 24.53 0 0 1 -24.5 24.5z" />
//                                         </svg>
//                                       ) : item.id === 15 ? (
//                                         <svg
//                                           id="Layer_1"
//                                           enableBackground="new 0 0 512 512"
//                                           height="512"
//                                           viewBox="0 0 512 512"
//                                           width="512"
//                                           xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                           <g>
//                                             <circle
//                                               cx="256"
//                                               cy="256"
//                                               fill="#4793ff"
//                                               r="256"
//                                             />
//                                             <path
//                                               d="m256 0c141.159 0 256 114.841 256 256s-114.841 256-256 256z"
//                                               fill="#5e69e2"
//                                             />
//                                             <circle
//                                               cx="256"
//                                               cy="256"
//                                               fill="#2ebeef"
//                                               r="191.733"
//                                             />
//                                             <path
//                                               d="m256 64.267c105.722 0 191.733 86.011 191.733 191.733s-86.011 191.733-191.733 191.733z"
//                                               fill="#4793ff"
//                                             />
//                                             <g>
//                                               <path
//                                                 d="m243.519 127.179-80.333 120.5c-3.359 5.038-3.359 11.603 0 16.641l80.333 120.5c5.937 8.906 19.024 8.906 24.962 0l80.333-120.5c3.359-5.038 3.359-11.603 0-16.641l-80.333-120.5c-5.938-8.906-19.024-8.906-24.962 0z"
//                                                 fill="#76e5f6"
//                                               />
//                                               <path
//                                                 d="m256 275.375v116.125c4.756 0 9.512-2.226 12.481-6.679l80.333-120.5c1.562-2.343 2.388-5.015 2.497-7.711l-92.37 18.474c-.97.194-1.956.291-2.941.291z"
//                                                 fill="#2ebeef"
//                                               />
//                                               <path
//                                                 d="m256 120.5c-4.756 0-9.512 2.226-12.481 6.679l-80.333 120.5c-1.797 2.696-2.623 5.828-2.497 8.931l92.369 18.474c.971.194 1.957.291 2.942.291z"
//                                                 fill="#c2f4fb"
//                                               />
//                                             </g>
//                                           </g>
//                                         </svg>
//                                       ) : item.id === 16 ? (
//                                         <svg
//                                           id="Capa_1"
//                                           enableBackground="new 0 0 512 512"
//                                           height="512"
//                                           viewBox="0 0 512 512"
//                                           width="512"
//                                           xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                           <g>
//                                             <path d="m437.019 74.98c-48.352-48.352-112.639-74.98-181.019-74.98s-132.667 26.628-181.019 74.98c-48.352 48.354-74.981 112.641-74.981 181.02s26.629 132.666 74.981 181.02c48.352 48.352 112.64 74.98 181.019 74.98 22.775 0 45.34-2.97 67.067-8.83 3.97-1.07 6.321-5.157 5.25-9.127-1.071-3.969-5.158-6.324-9.127-5.25-20.464 5.518-41.724 8.316-63.19 8.316-64.402 0-124.95-25.08-170.49-70.619-45.54-45.54-70.619-106.089-70.619-170.49s25.079-124.95 70.619-170.49 106.087-70.619 170.49-70.619 124.951 25.08 170.49 70.619 70.619 106.089 70.619 170.49-25.079 124.95-70.619 170.49c-22.021 22.02-47.5 39.301-75.73 51.364-3.781 1.615-5.537 5.99-3.921 9.772 1.616 3.78 5.99 5.538 9.772 3.921 29.985-12.812 57.038-31.158 80.409-54.526 48.351-48.355 74.98-112.642 74.98-181.021s-26.629-132.666-74.981-181.02z" />
//                                             <path d="m93.173 125.146c-3.293-2.466-7.958-1.793-10.422 1.499-28.158 37.62-43.042 82.35-43.042 129.355 0 119.263 97.028 216.291 216.291 216.291s216.291-97.028 216.291-216.291-97.028-216.291-216.291-216.291c-55.922 0-109.014 21.349-149.496 60.115-2.969 2.844-3.072 7.557-.228 10.527 2.844 2.968 7.556 3.072 10.527.228 37.697-36.098 87.131-55.979 139.197-55.979 111.052 0 201.4 90.348 201.4 201.4s-90.348 201.4-201.4 201.4-201.4-90.348-201.4-201.4c0-43.763 13.857-85.408 40.072-120.432 2.464-3.293 1.793-7.959-1.499-10.422z" />
//                                             <path d="m141.186 346.889c3.883 4.853 9.675 7.636 15.89 7.636h139.271c18.446 0 36.538-6.347 50.941-17.872s24.563-27.784 28.609-45.781l12.858-57.2c4.965-22.086-.3-44.893-14.444-62.57s-35.24-27.815-57.879-27.815h-121.021c-9.588 0-17.752 6.533-19.855 15.888l-13.861 61.664h-32.581c-7.529 0-14.064 5.101-15.89 12.404l-7.025 28.081c-1.035 4.139-.123 8.44 2.502 11.802 2.624 3.362 6.576 5.29 10.841 5.29h29.21l-11.531 51.294c-1.364 6.065.081 12.326 3.965 17.179zm-13.517-110.032c.166-.664.76-1.127 1.445-1.127h136.733l-6.672 26.669c-.166.664-.76 1.128-1.444 1.128h-136.734zm80.097 41.56h49.964c7.528 0 14.063-5.1 15.89-12.404l7.025-28.081c1.035-4.139.123-8.44-2.502-11.802-2.624-3.362-6.576-5.29-10.841-5.29h-46.594l4.49-19.973h90.692c5.298 0 10.144 2.188 13.295 6.004 3.286 3.98 4.523 9.146 3.392 14.175l-12.858 57.199c-2.476 11.012-12.087 18.703-23.374 18.703h-92.746zm-15.262 0-4.929 21.923c-.631 2.81.039 5.711 1.839 7.959 1.8 2.249 4.484 3.539 7.364 3.539h99.57c18.302 0 33.888-12.471 37.902-30.328l12.858-57.199c2.148-9.554-.199-19.367-6.438-26.923-5.99-7.254-15.021-11.413-24.778-11.413h-95.062c-4.444 0-8.228 3.029-9.201 7.363l-6.182 27.501h-28.491l13.128-58.398c.564-2.509 2.755-4.262 5.327-4.262h121.021c18.091 0 34.95 8.102 46.253 22.227 11.303 14.127 15.51 32.352 11.542 50.002l-12.858 57.2c-3.307 14.71-11.611 27.999-23.384 37.419s-26.56 14.608-41.638 14.608h-139.271c-2.283 0-3.651-1.284-4.263-2.048-.613-.766-1.565-2.382-1.064-4.61l12.265-54.559h28.49z" />
//                                           </g>
//                                         </svg>
//                                       ) : (
//                                         ""
//                                       )}
//                                     </div>
//                                     <h5 className="mb-0 ms-2">
//                                       {" "}
//                                       {item.title1}
//                                     </h5>
//                                     <span className="text-muted ms-2">
//                                       {" "}
//                                       {item.title2}
//                                     </span>
//                                   </Link>
//                                 </td>
//                                 <td>{item.price}</td>
//                                 <td
//                                   className={`${
//                                     index === 3 || index === 4
//                                       ? "text-danger"
//                                       : "text-success"
//                                   } `}
//                                 >
//                                   {item.change}
//                                 </td>
//                                 <td>{item.volume}</td>
//                                 <td>{item.cap}</td>
//                                 <td className="text-end">
//                                   <Link href={"#"}>Trade</Link>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                         <div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
//                           <div className="dataTables_info">
//                             Showing {activePag.current * sort + 1} to{" "}
//                             {data.length > (activePag.current + 1) * sort
//                               ? (activePag.current + 1) * sort
//                               : data.length}{" "}
//                             of {data.length} entries
//                           </div>
//                           <div
//                             className="dataTables_paginate paging_simple_numbers mb-0"
//                             id="application-tbl1_paginate"
//                           >
//                             <Link
//                               className="paginate_button previous "
//                               href="/market"
//                               onClick={() =>
//                                 activePag.current > 0 &&
//                                 onClick(activePag.current - 1)
//                               }
//                             >
//                               <i className="fa fa-angle-double-left"></i>
//                             </Link>
//                             <span>
//                               {paggination.map((number, i) => (
//                                 <Link
//                                   key={i}
//                                   href="/market"
//                                   className={`paginate_button  ${
//                                     activePag.current === i ? "current" : ""
//                                   } `}
//                                   onClick={() => onClick(i)}
//                                 >
//                                   {number}
//                                 </Link>
//                               ))}
//                             </span>

//                             <Link
//                               className="paginate_button next"
//                               href="/market"
//                               onClick={() =>
//                                 activePag.current + 1 < paggination.length &&
//                                 onClick(activePag.current + 1)
//                               }
//                             >
//                               <i className="fa fa-angle-double-right"></i>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="Spot">{/* <SpotTable /> */}</Tab.Pane>
//                 </Tab.Content>
//               </div>
//             </Tab.Container>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default market;
