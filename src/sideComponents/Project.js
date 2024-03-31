import React from "react";
import style from "./Project.module.css";
import { icons } from "../utils/icons";
import Tool from "./Tool";

const Project = () => {
  const gameTools = icons.filter((e) =>
    ["node", "next", "mySql", "postman"].includes(e.name)
  );

  return (
    <div>
      <h3>Game shop</h3>
      <img src="/gameshop.png" alt="gameshop" />
      <div>
        {gameTools.map(
          (
            item,
            index // Fixed typo: mapr to map
          ) => (
            <Tool key={index} tool={item} />
          )
        )}
      </div>
      <p>
        GameShop is a dynamic full-stack web application tailored for gamers. It
        offers a seamless user experience with features including secure
        authentication, game marketplace for buying and selling, CRUD
        functionality for managing game database, and integration with Imgur for
        uploading images. Users can stay updated with the latest games,
        trailers, and news, while engaging in community discussions. GameShop
        provides a centralized hub for gaming enthusiasts to explore, trade, and
        connect.
      </p>
      <div>
        <a href="LINK_TO_LIVE_PAGE" target="_blank">
          <button>Live Page</button>
        </a>
        <a href="LINK_TO_BACKEND_CODE" target="_blank">
          <button>Backend Code</button>
        </a>
        <a href="LINK_TO_FRONTEND_CODE" target="_blank">
          <button>Frontend Code</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
