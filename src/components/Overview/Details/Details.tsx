import { List, ListItem, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainCategoryInfo } from "../../../types";
import { mapLessImportantData, mapListData } from "../../../utils";

export const Details = () => {
  const { category, detail_id } = useParams();
  let navigate = useNavigate();

  const [mainInfo, setMainInfo] = useState<MainCategoryInfo>({
    title: "",
    body: "",
    subtitle: "",
  });
  const [lessImportantInfo, setLessImportantInfo] = useState<any>({});
  const theme = useTheme();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/${category}/${detail_id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        const data = mapListData(res, category);
        if(res.detail === 'Not found') {
          alert("Resource not found; Server error")
          setTimeout(() => {
            navigate(`/overview/${category}`);
          }, 1000)
        }
        if (!data) {
          setMainInfo({
            title: "There is no category with that name",
            subtitle:
              "Please try again by selecting the category from the menu.",
            body: "Thank you",
          });
          return;
        }
        
        setMainInfo(data);
        setLessImportantInfo(mapLessImportantData(res, data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Paper
      elevation={10}
      sx={{
        border: "1px solid #FFE81F",
        p: "20px",
        boxSizing: "border-box",
        maxWidth: "100%",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: "0.5em",
          [theme.breakpoints.down("sm")]: {
            fontSize: "28px",
          },
        }}
      >
        {mainInfo.title}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: "0.5em",
          [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
          },
        }}
      >
        Classification: {mainInfo.subtitle}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: "1em",
          [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
          },
        }}
      >
        {mainInfo.body}
      </Typography>
      <List>
        {Object.keys(lessImportantInfo).map((key) => {
          return (
            <ListItem
              key={key}
              sx={{
                // fontSize: "20px",
                [theme.breakpoints.down("sm")]: {
                  padding: "0px",
                },
              }}
            >
              <Typography
                sx={{
                  // color: "#FFE81F",
                  wordWrap: "break-word",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "12px",
                  },
                }}
                variant="body1"
              >
                <span style={{ color: "#FFE81F" }}>{key}</span> :{" "}
                {lessImportantInfo[key]}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};
