import { Modal } from "@mui/material";
import React from "react";
import ModalContainer from "./ModalContainer";
import _ from "lodash";

const NodeDetails = ({ data }) => {
  return (
    <div className="mt-4 grid grid-cols-2 items-center justify-center gap-6">
      <div className="currentNode flex flex-col items-center justify-center">
        <h3 className="font-bold">Current Node Details:</h3>
        <ul className="list-inside list-disc">
          <li>Id: {data.node.id}</li>
          <li>Type: {data.node.type}</li>
          <li>
            Left: {data.node.left} & Right: {data.node.right}
          </li>
          <li>Depth: {data.node.depth}</li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="parentNode">
          <h3 className="inline-block font-bold">Parent Detail:</h3>
          {data.parent ? (
            <ul className="list-inside list-disc">
              <li>Id: {data.parent.id}</li>
              <li>Type: {data.parent.type}</li>
            </ul>
          ) : (
            <span> No Parent</span>
          )}
        </div>

        <div className="ancestorNode">
          <h3 className="inline-block font-bold">Ancestor Ids:</h3>
          {!_.isEmpty(data.ancestors) ? (
            <span> {data.ancestors.join(", ")}</span>
          ) : (
            <span> No Ancestors</span>
          )}
        </div>

        <div className="siblingNode">
          <h3 className="inline-block font-bold">Sibling Ids:</h3>
          {!_.isEmpty(data.siblings) ? (
            <span> {data.siblings.join(", ")}</span>
          ) : (
            <span> No Siblings</span>
          )}
        </div>
      </div>

      <div className="childrenNode col-span-2 flex flex-col items-center justify-center">
        <h3 className="inline-block font-bold">Children Details: </h3>
        {!_.isEmpty(data.children) ? (
          <ul className="list-inside list-disc">
            {data.children.map((child, index) => (
              <li key={child.id}>
                Child {index + 1}: Id - {child.id}, Type - {child.type}
              </li>
            ))}
          </ul>
        ) : (
          <span> No Children</span>
        )}
      </div>
    </div>
  );
};

function CustomModal({ rowData, data, detailedData, handleModalClose }) {
  return (
    <>
      <Modal open={!!rowData} onClose={handleModalClose}>
        <ModalContainer>
          <div className="relative">
            <h1 className="mb-4 text-center text-2xl font-bold text-blue-600">
              Details about the Selected Row
            </h1>
            <p className="text-center">{data}</p>
            <NodeDetails data={detailedData} />
          </div>
        </ModalContainer>
      </Modal>
    </>
  );
}

export default CustomModal;
