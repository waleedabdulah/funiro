
export const discountedPrice = (product_price , discounted_percentage) => product_price - (product_price * discounted_percentage / 100);



export function buildComparisonData(firstData, secondData) {
    if (!firstData || !secondData) return [];
  
    return [
      {
        title: "General",
        rows: [
          ['Sales Package' , firstData?.product_name, secondData?.product_name] , 
          ["Model Number", firstData?.product_id, secondData?.product_id],
          ["Configuration", firstData?.materials?.configuration, secondData?.materials?.configuration],
          ["Secondary Material", firstData?.materials?.secondary_material, secondData?.materials?.secondary_material],
          ["Upholstery Material", firstData?.materials?.upholstery_material, secondData?.materials?.upholstery_material],
          ["Upholstery Color", firstData?.product_name, secondData?.product_name],
        ],
      },
      {
        title: "Product",
        rows: [
          ["Filling Material", firstData?.materials?.filling_material, secondData?.materials?.filling_material],
          ["Finish Type", firstData?.materials?.finish_type, secondData?.materials?.finish_type],
          ["Adjustable Headrest", firstData?.materials?.adjustable_headrest === true ? "Yes" : firstData?.materials?.adjustable_headrest === false ? "No" : null, secondData?.materials?.adjustable_headrest === true ? "Yes" : secondData?.materials?.adjustable_headrest === false ? "No" : null],
          ["Maximum Load Capacity", firstData?.materials?.maximum_load_capacity, secondData?.materials?.maximum_load_capacity],
          ["Origin of Manufacture", firstData?.materials?.origin_of_manufacture, secondData?.materials?.origin_of_manufacture],
        ],
      },
      {
        title: "Dimensions",
        rows: [
          ["Width", firstData?.dimensions?.width ? firstData?.dimensions?.width + ' cm' : null, secondData?.dimensions?.width ? secondData?.dimensions?.width + ' cm' : null],
          ["Height", firstData?.dimensions?.height ? firstData?.dimensions?.height + ' cm' : null, secondData?.dimensions?.height ? secondData?.dimensions?.height + ' cm' : null],
          ["Depth", firstData?.dimensions?.depth ? firstData?.dimensions?.depth + ' cm' : null, secondData?.dimensions?.depth ? secondData?.dimensions?.depth + ' cm' : null],
          ["Weight", firstData?.dimensions?.weight ? firstData?.dimensions?.weight + ' KG' : null, secondData?.dimensions?.weight ? secondData?.dimensions?.weight + ' KG' : null],
          ["Seat Height", firstData?.dimensions?.seat_height ? firstData?.dimensions?.seat_height + ' cm' : null, secondData?.dimensions?.seat_height ? secondData?.dimensions?.seat_height + ' cm' : null ],
          ["Leg Height", firstData?.dimensions?.leg_height ? firstData?.dimensions?.leg_height + ' cm' : null, secondData?.dimensions?.leg_height ? secondData?.dimensions?.leg_height + ' cm' : null ],
        ],
      },
      {
        title: "Warranty",
        rows: [
          ["Warranty Summary", firstData?.warranty?.warranty_summary, secondData?.warranty?.warranty_summary],
          ["Warranty Service Type", firstData?.warranty?.warranty_service_type, secondData?.warranty?.warranty_service_type],
          ["Covered in Warranty", firstData?.warranty?.covered_in_warranty, secondData?.warranty?.covered_in_warranty],
          ["Not Covered in Warranty", firstData?.warranty?.not_covered_in_warranty, secondData?.warranty?.not_covered_in_warranty],
          ["Domestic Warranty", firstData?.warranty?.domestic_warranty, secondData?.warranty?.domestic_warranty],
        ],
      },
    ];
}