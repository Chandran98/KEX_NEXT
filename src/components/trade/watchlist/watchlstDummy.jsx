// import React from 'react'

// const watchlist = () => {
//      const LtcIcon = (
//         <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15.5 13.7222H7.72226C7.44585 13.7236 7.17885 13.6219 6.9734 13.437C6.76794 13.2521 6.63878 12.9972 6.61115 12.7222L6.9667 9.05553L10.2445 8.16664C10.5392 8.08707 10.7902 7.8937 10.9423 7.62907C11.0944 7.36443 11.1352 7.05021 11.0556 6.75553C10.976 6.46084 10.7827 6.20983 10.518 6.05772C10.2534 5.90561 9.93916 5.86485 9.64448 5.94442L7.21115 6.6333L7.72226 1.61108C7.75173 1.3164 7.66292 1.02208 7.47539 0.792865C7.28785 0.563654 7.01694 0.418329 6.72226 0.38886C6.42757 0.359392 6.13325 0.448194 5.90404 0.63573C5.67483 0.823266 5.5295 1.09418 5.50004 1.38886L4.91115 7.3333L1.8667 8.16664C1.57202 8.20642 1.30521 8.36164 1.12496 8.59814C0.944719 8.83464 0.865809 9.13306 0.905592 9.42775C0.945374 9.72243 1.10059 9.98925 1.33709 10.1695C1.5736 10.3497 1.87202 10.4286 2.1667 10.3889C2.26605 10.405 2.36736 10.405 2.4667 10.3889L4.68893 9.75553L4.38892 12.6111C4.38892 13.4951 4.74011 14.343 5.36523 14.9681C5.99036 15.5932 6.8382 15.9444 7.72226 15.9444H15.5C15.7947 15.9444 16.0773 15.8274 16.2857 15.619C16.4941 15.4106 16.6111 15.128 16.6111 14.8333C16.6111 14.5386 16.4941 14.256 16.2857 14.0476C16.0773 13.8393 15.7947 13.7222 15.5 13.7222Z" fill="#FCFCFC"/>
//         </svg>	
//     )
    
//      const BtcIcon = (
//         <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M13.2472 9.15687C13.6996 8.48871 13.9615 7.70994 14.0047 6.90419C14.0479 6.09844 13.8707 5.29615 13.4924 4.58346C13.114 3.87078 12.5486 3.27462 11.857 2.85901C11.1653 2.4434 10.3735 2.22404 9.56662 2.22448V1.11337C9.56662 0.818684 9.44956 0.536069 9.24119 0.327695C9.03281 0.119321 8.7502 0.0022583 8.45551 0.0022583C8.16083 0.0022583 7.87821 0.119321 7.66984 0.327695C7.46146 0.536069 7.3444 0.818684 7.3444 1.11337V2.22448H5.12218V1.11337C5.12218 0.818684 5.00512 0.536069 4.79674 0.327695C4.58837 0.119321 4.30575 0.0022583 4.01107 0.0022583C3.71638 0.0022583 3.43377 0.119321 3.22539 0.327695C3.01702 0.536069 2.89996 0.818684 2.89996 1.11337V2.22448H1.78885C1.49416 2.22448 1.21154 2.34154 1.00317 2.54992C0.794797 2.75829 0.677734 3.04091 0.677734 3.33559C0.677734 3.63028 0.794797 3.91289 1.00317 4.12127C1.21154 4.32964 1.49416 4.4467 1.78885 4.4467H2.89996V15.5578H1.78885C1.49416 15.5578 1.21154 15.6749 1.00317 15.8833C0.794797 16.0916 0.677734 16.3742 0.677734 16.6689C0.677734 16.9636 0.794797 17.2462 1.00317 17.4546C1.21154 17.663 1.49416 17.78 1.78885 17.78H2.89996V18.8911C2.89996 19.1858 3.01702 19.4684 3.22539 19.6768C3.43377 19.8852 3.71638 20.0023 4.01107 20.0023C4.30575 20.0023 4.58837 19.8852 4.79674 19.6768C5.00512 19.4684 5.12218 19.1858 5.12218 18.8911V17.78H7.3444V18.8911C7.3444 19.1858 7.46146 19.4684 7.66984 19.6768C7.87821 19.8852 8.16083 20.0023 8.45551 20.0023C8.7502 20.0023 9.03281 19.8852 9.24119 19.6768C9.44956 19.4684 9.56662 19.1858 9.56662 18.8911V17.78H11.7888C12.8383 17.7828 13.8548 17.413 14.6572 16.7367C15.4597 16.0603 15.9962 15.1211 16.1712 14.0863C16.3462 13.0515 16.1484 11.9882 15.613 11.0855C15.0776 10.1829 14.2393 9.49948 13.2472 9.15693V9.15687ZM5.12218 4.4467H9.56662C10.156 4.4467 10.7212 4.68083 11.138 5.09758C11.5547 5.51432 11.7888 6.07956 11.7888 6.66893C11.7888 7.2583 11.5547 7.82353 11.138 8.24027C10.7212 8.65702 10.156 8.89115 9.56662 8.89115H5.12218V4.4467ZM11.7888 15.5578H5.12218V11.1134H11.7888C12.3782 11.1134 12.9434 11.3475 13.3602 11.7642C13.7769 12.181 14.0111 12.7462 14.0111 13.3356C14.0111 13.925 13.7769 14.4902 13.3602 14.9069C12.9434 15.3237 12.3782 15.5578 11.7888 15.5578Z" fill="#FCFCFC"/>
//         </svg>	
//     )
//      const XtzIcon = (
//         <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15.1119 12.24C15.1219 12.1603 15.1219 12.0797 15.1119 12C15.1212 11.9233 15.1212 11.8457 15.1119 11.7689C15.1134 11.7393 15.1134 11.7096 15.1119 11.68C15.0979 11.6399 15.08 11.6012 15.0586 11.5645L8.83639 0.897799C8.81109 0.846041 8.77467 0.800512 8.72973 0.764466C8.64641 0.672805 8.54486 0.599569 8.43159 0.549453C8.31831 0.499338 8.19582 0.47345 8.07195 0.47345C7.94808 0.47345 7.82559 0.499338 7.71231 0.549453C7.59904 0.599569 7.49749 0.672805 7.41417 0.764466C7.36923 0.800512 7.33281 0.846041 7.30751 0.897799L1.08528 11.5645C1.06386 11.6012 1.046 11.6399 1.03195 11.68C1.03047 11.7096 1.03047 11.7393 1.03195 11.7689C0.973936 11.8389 0.926059 11.9167 0.889728 12C0.880507 12.0768 0.880507 12.1544 0.889728 12.2311C0.888246 12.2607 0.888246 12.2904 0.889728 12.32C0.90378 12.3602 0.921639 12.3988 0.943061 12.4356L7.16528 23.1022C7.24399 23.2349 7.35585 23.3448 7.48988 23.4211C7.62391 23.4974 7.77549 23.5375 7.92973 23.5375C8.08396 23.5375 8.23554 23.4974 8.36957 23.4211C8.5036 23.3448 8.61547 23.2349 8.69417 23.1022L14.9164 12.4356C14.9378 12.3988 14.9557 12.3602 14.9697 12.32C15.0195 12.2978 15.0671 12.271 15.1119 12.24ZM4.03639 12L7.11195 10.6845V13.3511L4.03639 12ZM7.11195 8.74669L3.90306 10.1245L7.11195 4.62224V8.74669ZM8.88973 10.6845L11.9653 12L8.88973 13.3156V10.6845ZM8.88973 8.74669V4.62224L12.0986 10.1245L8.88973 8.74669ZM8.00084 20.8889L3.90306 13.8578L7.65417 15.4667C7.76384 15.5131 7.88173 15.5371 8.00084 15.5371C8.11994 15.5371 8.23783 15.5131 8.34751 15.4667L12.0986 13.8578L8.00084 20.8889Z" fill="#FCFCFC"/>
//         </svg>
//     )
    
//      const EthIcon = (
//         <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M15.8893 12.6666C15.4127 12.6738 14.9402 12.7563 14.4893 12.9111L12.8893 11L14.4893 9.08887C14.9402 9.24363 15.4127 9.32613 15.8893 9.33331C16.9087 9.33828 17.8988 8.99266 18.6937 8.35439C19.4886 7.71613 20.0399 6.82401 20.2552 5.8276C20.4705 4.83118 20.3367 3.79104 19.8763 2.88154C19.4158 1.97203 18.6567 1.24845 17.7262 0.832085C16.7957 0.415724 15.7504 0.331894 14.7654 0.594648C13.7804 0.857402 12.9157 1.45077 12.3163 2.27528C11.7168 3.09978 11.4189 4.10531 11.4727 5.12331C11.5265 6.1413 11.9285 7.10987 12.6115 7.86665L10.9226 9.88887H9.06709C8.79666 8.84147 8.15351 7.92866 7.2582 7.32153C6.36289 6.71441 5.27689 6.45465 4.20376 6.59096C3.13063 6.72726 2.14406 7.25027 1.42896 8.06194C0.713861 8.87362 0.319336 9.91823 0.319336 11C0.319336 12.0817 0.713861 13.1263 1.42896 13.938C2.14406 14.7497 3.13063 15.2727 4.20376 15.409C5.27689 15.5453 6.36289 15.2856 7.2582 14.6784C8.15351 14.0713 8.79666 13.1585 9.06709 12.1111H10.9226L12.6115 14.1333C11.9285 14.8901 11.5265 15.8587 11.4727 16.8767C11.4189 17.8946 11.7168 18.9002 12.3163 19.7247C12.9157 20.5492 13.7804 21.1426 14.7654 21.4053C15.7504 21.6681 16.7957 21.5842 17.7262 21.1679C18.6567 20.7515 19.4158 20.0279 19.8763 19.1184C20.3367 18.2089 20.4705 17.1688 20.2552 16.1724C20.0399 15.1759 19.4886 14.2838 18.6937 13.6456C17.8988 13.0073 16.9087 12.6617 15.8893 12.6666ZM4.77821 13.2222C4.33869 13.2222 3.90905 13.0919 3.54361 12.8477C3.17816 12.6035 2.89334 12.2564 2.72514 11.8504C2.55695 11.4443 2.51294 10.9975 2.59868 10.5664C2.68443 10.1354 2.89607 9.73942 3.20686 9.42863C3.51764 9.11785 3.9136 8.9062 4.34467 8.82046C4.77574 8.73471 5.22256 8.77872 5.62861 8.94691C6.03467 9.11511 6.38174 9.39994 6.62592 9.76538C6.8701 10.1308 7.00043 10.5605 7.00043 11C7.00043 11.5893 6.7663 12.1546 6.34955 12.5713C5.93281 12.9881 5.36758 13.2222 4.77821 13.2222ZM15.8893 2.66665C16.3288 2.66665 16.7585 2.79698 17.1239 3.04116C17.4894 3.28534 17.7742 3.6324 17.9424 4.03846C18.1106 4.44452 18.1546 4.89133 18.0688 5.3224C17.9831 5.75347 17.7714 6.14943 17.4607 6.46022C17.1499 6.771 16.7539 6.98265 16.3229 7.06839C15.8918 7.15414 15.445 7.11013 15.0389 6.94193C14.6329 6.77374 14.2858 6.48891 14.0416 6.12347C13.7974 5.75803 13.6671 5.32838 13.6671 4.88887C13.6671 4.2995 13.9012 3.73427 14.318 3.31752C14.7347 2.90077 15.2999 2.66665 15.8893 2.66665ZM15.8893 19.3333C15.4498 19.3333 15.0202 19.203 14.6547 18.9588C14.2893 18.7146 14.0044 18.3676 13.8363 17.9615C13.6681 17.5554 13.624 17.1086 13.7098 16.6776C13.7955 16.2465 14.0072 15.8505 14.318 15.5397C14.6288 15.229 15.0247 15.0173 15.4558 14.9316C15.8869 14.8458 16.3337 14.8898 16.7397 15.058C17.1458 15.2262 17.4928 15.511 17.737 15.8765C17.9812 16.2419 18.1115 16.6716 18.1115 17.1111C18.1115 17.7005 17.8774 18.2657 17.4607 18.6824C17.0439 19.0992 16.4787 19.3333 15.8893 19.3333Z" fill="#FCFCFC"/>
//         </svg>	
//     )
// const marketBlog = [
// 	{icon: LtcIcon, classBg: 'bg-success', Name:'LTC', },
// 	{icon: BtcIcon, classBg: 'bg-warning', Name:'BTC', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: EthIcon, classBg: 'bg-pink', Name:'ETH', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: LtcIcon, classBg: 'bg-success', Name:'LTC', },
// 	{icon: BtcIcon, classBg: 'bg-warning', Name:'BTC', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: EthIcon, classBg: 'bg-pink', Name:'ETH', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: LtcIcon, classBg: 'bg-success', Name:'LTC', },
// 	{icon: BtcIcon, classBg: 'bg-warning', Name:'BTC', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: EthIcon, classBg: 'bg-pink', Name:'ETH', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: LtcIcon, classBg: 'bg-success', Name:'LTC', },
// 	{icon: BtcIcon, classBg: 'bg-warning', Name:'BTC', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: EthIcon, classBg: 'bg-pink', Name:'ETH', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: LtcIcon, classBg: 'bg-success', Name:'LTC', },
// 	{icon: BtcIcon, classBg: 'bg-warning', Name:'BTC', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// 	{icon: EthIcon, classBg: 'bg-pink', Name:'ETH', },
// 	{icon: XtzIcon, classBg: 'bg-primary', Name:'XTZ', },
// ];

//   return (
//     <div className=" ">
//     <div className="card">
//         <div className="card-header pb-0">
//             <div>
//                 <h2 className="heading">Market Previews</h2>
//             </div>
//         </div>
//         <div className=" relative card-body pt-0 px-0 h-[123vh] overflow-auto ">
         
//         {marketBlog.map((data, ind)=>(
//                 <div className="previews-info-list" key={ind}>
//                     <div className="pre-icon">
//                         {/* <span className={`icon-box icon-box-sm ${data.classBg}`}>
//                             {data.icon}
//                         </span> */}
//                         <div className="ms-2">
//                             <h6>{data.Name}/Year</h6>
//                             <span>March</span>
//                         </div>
//                     </div>
//                     <div className="count">
//                         <h6>120.45</h6>
//                         <span className={ind%2 == 0 ? "text-success" : ""}>1,24%</span>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//     </div>
//   )
// }

//  export default watchlist