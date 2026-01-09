export const BlogCard = ({ title, date, description, index = 0 }) => {
    const gradients = [
        'linear-gradient(90deg, rgb(175 105 227) 0%, #3E6EB4 35%, #B7C5E5 70%, rgb(175 105 227) 100%)',
        'linear-gradient(90deg, #3E6EB4 0%, #B7C5E5 40%, #A64CE8 75%, #696969 100%)',
        'linear-gradient(90deg, #B7C5E5 0%, #A64CE8 35%, #3E6EB4 70%, #696969 100%)'
    ];

    const gradient = gradients[index % gradients.length];

    return (
        <div className="relative w-full sm:max-w-[343px] gap-[16px]">
            {/* GRADIENT SHADOW CARD */}
            <div
                style={{ background: gradient }}
                className="absolute
                   top-[140px]        
                   left-1/2
                   -translate-x-1/2    
                   w-[420px]           
                   h-[120px]
                   rounded-[12px]
                   opacity-25
                   z-0"
            />

            {/* WHITE CARD */}
            <div
                className="relative z-10
                   w-full h-[235px]
                   bg-white
                   rounded-[10px]
                   border border-gray-200
                   p-[24px]
                   flex flex-col gap-[16px]
                   shadow-md"
            >
                <h3 className="text-[16px] font-bold text-gray-900">{title}</h3>

                <p className="text-[12px] text-[#3E6EB4]">{date}</p>

                <p className="text-[#696969] text-[14px] leading-[19px]">{description}</p>
            </div>
        </div>
    );
};
