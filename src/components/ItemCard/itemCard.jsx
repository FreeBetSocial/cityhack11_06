import classes from "./itemcard.module.scss"


const ItemCard = ({type="",item})=>{
    return (
        <div className={classes.ItemCard}>
            <div className={classes.itemImg} style={{
                backgroundImage:`url(${item.img})`,
            }}></div>
            <h2>{item.title}</h2>
            <hr/>
            {type=="market"&&<strong>{item.desc}</strong>}

            {type=="market"&&<div>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.50062 9.51255C5.02889 9.51255 2.08367 8.39001 0.617188 6.71211V7.05013C0.650604 9.37316 4.1869 11.2688 8.50062 11.2688C12.7601 11.2688 16.3699 9.32502 16.3837 7.02416V6.71191C14.9174 8.38981 11.9722 9.51255 8.50062 9.51255Z" fill="#0D5185"/>
                <path d="M8.50062 12.2644C5.03711 12.2644 2.08617 11.138 0.617188 9.45801V9.907C0.650604 12.2298 4.1869 14.1255 8.50062 14.1255C12.7601 14.1255 16.3699 12.1817 16.3837 9.88103V9.46012C14.9164 11.1401 11.9689 12.2644 8.50062 12.2644Z" fill="#0D5185"/>
                <path d="M8.50062 15.1218C5.03711 15.1218 2.08617 13.9954 0.617188 12.3154V12.7808C0.650604 15.104 4.1869 16.9997 8.50062 16.9997C12.7601 16.9997 16.3699 15.0559 16.3837 12.7551V12.3175C14.9164 13.9975 11.9689 15.1218 8.50062 15.1218Z" fill="#0D5185"/>
                <path d="M10.1564 5.35858C10.1564 5.21039 10.0743 5.09847 9.91041 5.02247C9.74635 4.94647 9.49505 4.88936 9.15625 4.85059V5.84538C9.82294 5.78885 10.1564 5.62652 10.1564 5.35858Z" fill="#0D5185"/>
                <path d="M7.0941 3.50111C7.26599 3.57883 7.52685 3.63881 7.87634 3.681V2.66504C7.4839 2.69332 7.21252 2.75059 7.06166 2.83693C6.91116 2.92343 6.83594 3.03192 6.83594 3.16234C6.83591 3.31073 6.92185 3.42359 7.0941 3.50111Z" fill="#0D5185"/>
                <path d="M8.50062 8.51612C12.7739 8.51612 16.3837 6.56629 16.3837 4.25795C16.3837 1.94984 12.7739 0 8.50062 0C4.22737 0 0.617188 1.94984 0.617188 4.25798C0.617188 6.56629 4.2274 8.51612 8.50062 8.51612ZM5.26188 2.59383C5.39116 2.41222 5.57641 2.25522 5.81857 2.12289C6.06054 1.99073 6.35501 1.88398 6.70184 1.80262C7.04864 1.72165 7.43997 1.66512 7.87519 1.63323V1.08838H9.15778V1.61776C9.55022 1.6317 9.94955 1.66093 10.3556 1.70484C10.7614 1.74934 11.134 1.81006 11.4726 1.88742V2.93511C10.6445 2.75863 9.873 2.66011 9.15778 2.63872V3.8134C9.49658 3.84873 9.83136 3.89551 10.1621 3.95357C10.4929 4.01182 10.7885 4.09623 11.0494 4.20756C11.3101 4.3187 11.5224 4.46423 11.6866 4.64414C11.8505 4.82386 11.9326 5.05491 11.9326 5.33719C11.9326 5.78885 11.6918 6.14348 11.2109 6.40073C10.7295 6.65837 10.0452 6.81878 9.15795 6.88217V7.42722H7.87535V6.90873C7.34844 6.89803 6.8525 6.86728 6.38729 6.81612C5.92227 6.76492 5.53649 6.69351 5.2298 6.60184V5.56505C5.43969 5.61452 5.64382 5.65766 5.84282 5.69491C6.04182 5.73177 6.24596 5.76346 6.45584 5.79002C6.66553 5.81657 6.88612 5.83757 7.11739 5.8536C7.34828 5.86946 7.60113 5.87918 7.87538 5.88263V4.72378C7.53697 4.69208 7.20086 4.64872 6.86742 4.59411C6.53379 4.5395 6.23415 4.45756 5.96793 4.34814C5.70171 4.2389 5.48533 4.09395 5.3188 3.91426C5.15189 3.73454 5.0688 3.50157 5.0688 3.21588C5.06864 2.98263 5.133 2.77563 5.26188 2.59383Z" fill="#0D5185"/>
                </svg>
                <p>{item.price}</p>
            </div>}
            {type==""&&<div>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49929 0C5.62805 0 2.47852 3.14948 2.47852 7.02077C2.47852 10.7688 8.87898 18.5092 9.15144 18.8368C9.23739 18.9402 9.36484 19 9.49929 19C9.63368 19 9.76119 18.9402 9.84714 18.8368C10.1197 18.5091 16.5201 10.7688 16.5201 7.02077C16.5201 3.14948 13.3706 0 9.49929 0ZM9.49929 17.8297C8.93176 17.121 7.75261 15.6112 6.58577 13.8851C4.49071 10.7861 3.38328 8.41242 3.38328 7.02077C3.38328 3.64836 6.12694 0.904762 9.49929 0.904762C12.8716 0.904762 15.6153 3.64836 15.6153 7.02077C15.6153 8.41236 14.5079 10.786 12.4128 13.8851C11.2459 15.6112 10.0668 17.121 9.49929 17.8297Z" fill="#3D7199"/>
                    <path d="M11.8008 12.9057C11.5938 12.7658 11.3126 12.8203 11.1727 13.0273C10.5623 13.931 9.87839 14.8781 9.1401 15.8424C8.98822 16.0407 9.02586 16.3247 9.22425 16.4765C9.30628 16.5394 9.40297 16.5698 9.49893 16.5698C9.63489 16.5698 9.76939 16.5087 9.85842 16.3924C10.6076 15.414 11.302 14.4523 11.9224 13.5338C12.0623 13.3268 12.0079 13.0456 11.8008 12.9057Z" fill="#3D7199"/>
                    <path d="M9.49859 3.46777C7.45316 3.46777 5.78906 5.13187 5.78906 7.1773C5.78906 9.22272 7.45316 10.8868 9.49859 10.8868C11.544 10.8868 13.2081 9.22272 13.2081 7.1773C13.2081 5.13187 11.544 3.46777 9.49859 3.46777ZM9.49859 9.98206C7.95205 9.98206 6.69382 8.72384 6.69382 7.1773C6.69382 5.63076 7.95205 4.37254 9.49859 4.37254C11.0452 4.37254 12.3033 5.63076 12.3033 7.1773C12.3033 8.72384 11.0452 9.98206 9.49859 9.98206Z" fill="#3D7199"/>
                </svg>
                <p>{item.location}</p>

            </div>}
            {type==""&&<div>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.937513 0H14.0625C14.58 0 15 0.419529 15 0.937513V14.0625C15 14.58 14.58 15 14.0625 15H0.937513C0.420012 14.9999 0 14.58 0 14.0625V0.937513C0 0.419529 0.420012 0 0.937513 0Z" fill="#EDEEF0"/>
                    <path d="M14.0625 0H0.937513C0.420012 0 0 0.419529 0 0.937513V3.28124H14.9999V0.937513C14.9999 0.419529 14.58 0 14.0625 0Z" fill="#3D7199"/>
                    <path d="M10.1606 7.94371C9.99562 7.94371 9.82405 7.97232 9.68949 8.02808L9.67449 8.01399C9.92106 7.68493 10.4072 7.23632 10.7062 6.89323C10.7957 6.78776 10.8633 6.70387 10.8633 6.6059C10.8633 6.35371 10.5412 6.0945 10.3327 6.0945C10.2722 6.0945 10.1902 6.0945 10.1081 6.14373C10.0186 6.19998 9.92856 6.25574 9.86856 6.31155C9.11339 6.97015 7.96922 8.45607 7.96922 9.51357C7.96922 10.4455 8.69439 11.2512 9.84606 11.2512C10.9523 11.2512 11.7225 10.4248 11.7225 9.51357C11.723 8.68619 11.0578 7.94371 10.1606 7.94371ZM9.84655 10.2415C9.39793 10.2415 9.13594 9.90546 9.13594 9.51261C9.13594 9.09961 9.42 8.78465 9.84655 8.78465C10.3177 8.78465 10.5572 9.14182 10.5572 9.51261C10.5567 9.9195 10.2722 10.2415 9.84655 10.2415ZM6.427 10.3076H5.01001C5.66812 9.54544 6.86859 8.56154 6.86859 7.57202C6.86859 6.66686 6.10217 6.08984 5.14971 6.08984C4.19725 6.08984 3.33002 6.8094 3.33002 7.707C3.33002 7.98448 3.52313 8.22686 3.89487 8.22686C4.63832 8.22686 4.21268 7.07278 5.10332 7.07278C5.42065 7.07278 5.66068 7.3292 5.66068 7.62119C5.66068 7.87761 5.52896 8.09836 5.38974 8.28402C4.801 9.06774 4.10394 9.70855 3.46131 10.414C3.38396 10.4998 3.2832 10.6277 3.2832 10.7773C3.2832 11.1054 3.54664 11.2475 3.88743 11.2475H6.47397C6.76789 11.2475 7.03133 11.1054 7.03133 10.7773C7.03122 10.4496 6.76735 10.3076 6.427 10.3076Z" fill="#324D5B"/>
                    <path d="M0 2.8125H14.9999V3.75001H0V2.8125Z" fill="#0D5185"/>
                    <path d="M7.50001 0.9375C7.75921 0.9375 7.96876 1.14748 7.96876 1.40626C7.96876 1.66503 7.75921 1.87501 7.50001 1.87501C7.2408 1.87501 7.03125 1.66503 7.03125 1.40626C7.03125 1.14748 7.24075 0.9375 7.50001 0.9375Z" fill="#0D5185"/>
                    <path d="M14.0625 14.0625H0.937513C0.420012 14.0625 0 13.6425 0 13.125V14.0625C0 14.58 0.420012 15 0.937513 15H14.0625C14.58 15 15 14.58 15 14.0625V13.125C14.9999 13.6425 14.58 14.0625 14.0625 14.0625Z" fill="#C4C4C4"/>
                </svg>
                <p>{item.date}</p>
            </div>}
        </div>
    )
}

export default ItemCard