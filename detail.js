import fetcher from "./modules/fetchAPI.js";
import {detailsCardContainer, detailsInfoContainer,gridContainer,listContainer, listHeading} from "./modules/UI/viewConstants.js";
import { renderTopics } from "./modules/UI/render.js";
import { createDetailsCard } from "./modules/UI/detailsCard.js";
import { createDetailsInfo } from "./modules/UI/detailsInfo.js";
import { createHeading, createSubTopicsList } from "./modules/UI/detailsSubTopics.js";


const params = new URLSearchParams(location.search).get('id');



async function init() {
    await fetcher(`details/${params}`).then((item)=> {
        renderTopics([item], detailsInfoContainer, createDetailsInfo);


        renderTopics([item], detailsCardContainer, createDetailsCard);

        renderTopics([...item.subtopics], listContainer, createSubTopicsList);

        renderTopics([item.topic], listHeading, createHeading);



        
    
    });



}

await init()
