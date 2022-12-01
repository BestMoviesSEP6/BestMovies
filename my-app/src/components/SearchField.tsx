import {
  Box,
  Grid,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavLink from "./NavLink";
import { useState } from "react";
import handleMessageChange from "../interfaces/handleMessageChange";

const SearchField = ({ handleMessageChange }: handleMessageChange) => {
  // Small screens
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchDrawerToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
          <InputBase
            sx={{
              display: { xs: "none", md: "block" },
              ml: 1,
              flex: 1,
              color: "#fff",
              fontSize: "0.9em",
              borderRadius: "5px",
              backgroundColor: "rgba(255, 255, 255, 0.200)",
              padding: "4px 4px 4px 14px",
            }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={handleMessageChange}
          />

          <IconButton
            type="button"
            onClick={handleSearchDrawerToggle}
            sx={{ p: "10px", display: { xs: "block", md: "none" } }}
            aria-label="search"
          >
            <SearchIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Grid>
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <NavLink title={"Sign In"} url={"sign-in"} />
        </Box>
      </Grid>
    </>
  );
};

export default SearchField;
