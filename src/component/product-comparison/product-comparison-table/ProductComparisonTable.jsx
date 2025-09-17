import React, { memo } from "react";
import "./ProductComparisonTable.scss";
import { useWindowSize } from "../../../context/ui-adjustment-context/UIAdjustmentContext.jsx";
import { useNavigate } from "react-router-dom";
import { useProductAdditionalInfo } from "../../../hooks/react-query/useProductAdditionalInfo.js";
import { buildComparisonData } from "../../../helpers/utils.js";


function ProductComparisonTable({ selectedItemForComparison }) {
  const firstProductId = selectedItemForComparison?.first;
  const secondProductId = selectedItemForComparison?.second;

  const { data: firstData, isLoading: firstLoading } = useProductAdditionalInfo(firstProductId);
  const { data: secondData, isLoading: secondLoading } = useProductAdditionalInfo(secondProductId);

  const { windowSize } = useWindowSize();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  if (firstLoading || secondLoading) return <p>Loading...</p>;

  const comparisonData = buildComparisonData(firstData, secondData);

  if( comparisonData.length === 0 )
    return (
        <>
            {   
                firstProductId || secondProductId 
                    ?   <span>Kindly, Select 2 items for the comparison. </span>
                    :   null
            }
        </>
    )

  return (
    <div className="table">
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        {comparisonData?.map((section, index) => (
          <React.Fragment key={section.title}>
            <thead>
              <tr>
                <th>{section.title}</th>
                <th></th>
                <th></th>
                {windowSize > 768 && <th></th>}
              </tr>
            </thead>
            <tbody>
              {section?.rows?.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row?.map((value, cellIdx) => (
                    <td key={cellIdx}>{value}</td>
                  ))}
                  {windowSize > 768 && <td></td>}
                </tr>
              ))}

              {/* Add to Cart row at the very end of last section */}
              {index === comparisonData.length - 1 && (
                <tr>
                  <td></td>
                  <td>
                    <button onClick={handleClick}>Add To Cart</button>
                  </td>
                  <td>
                    <button onClick={handleClick}>Add To Cart</button>
                  </td>
                  {windowSize > 768 && <td></td>}
                </tr>
              )}
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
}

export default memo(ProductComparisonTable);
