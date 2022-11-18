import React, {useState} from "react";
import styled, {useTheme} from "styled-components";
import {Box} from "../common";
import {HiPlay} from "react-icons/hi2";
import {tableFactory} from "../Table/table.utils";



const BoxCollapse = styled(Box)`
  overflow: hidden;
  padding: 3px;
  transition: 0.4s ease-in-out;
  max-height: ${(props) => (props.$in ? "1000px" : "0px")};
`;

export function CollapseSection({ data, title, onClick }) {
    const [open, setOpen] = useState(true);
    const theme = useTheme();

    const onClickHandler = () => {
        setOpen(!open);
    };

    return (
        <Box style={{ padding: "10px 20px" }}>
            <Box style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <Box
                    style={{
                        backgroundColor: theme.background,
                        height: "15px",
                        width: "15px",
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "10px",
                    }}
                >
                    <HiPlay
                        style={{
                            fontSize: "8px",
                            color: "#6a1c9a",
                            transform: open ? "rotate(90deg)" : "none",
                            transition: "0.2s ease-in-out",
                        }}
                    />
                </Box>
                <span style={{ marginLeft: "10px", fontWeight: 800, color: "grey" }} onClick={onClickHandler}>
          {title}
        </span>
            </Box>
            <BoxCollapse $in={open}>{tableFactory(data, onClick)}</BoxCollapse>
        </Box>
    );
}