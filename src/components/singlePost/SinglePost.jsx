import React from "react";
import "./singlePost.css";
import { DeleteForever, Edit } from "@mui/icons-material";
import home from "../../assets/home.jpg";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="sp-wrapper">
        <img src={home} alt="post" />
        <h1 className="sp-title">
          welcome to my very first
          <div className="sp-icons">
            <Edit className="sp-icon edit" />
            <DeleteForever className="sp-icon" />
          </div>
        </h1>
        <div className="sp-info">
          <span className="sp-author">
            Author: <strong>John Danlami</strong>
          </span>
          <span className="sp-date">1 day ago</span>
        </div>
        <p className="sp-lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          soluta, enim veniam a assumenda tempora. Nam inventore maxime
          recusandae pariatur distinctio! Facilis magnam tempora delectus
          cupiditate aut fugiat non. Officiis et quia est adipisci vitae, natus
          dolores animi vero nostrum deserunt eum perferendis aspernatur maiores
          cumque facere cum placeat veritatis ea magnam asperiores corporis eos
          quisquam in porro! Suscipit, beatae quaerat! Eaque libero ea
          consectetur adipisci beatae maxime nesciunt illo excepturi, alias
          dolores, voluptas deleniti soluta omnis doloribus nemo sint dicta modi
          repellat officia optio porro facilis accusamus. Sed voluptate, tempore
          molestiae libero fugit laudantium voluptatibus voluptas autem magnam
          veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Odit, neque mollitia assumenda nisi omnis enim laudantium itaque id
          unde ipsum odio dignissimos, explicabo expedita voluptates sunt facere
          optio ducimus? Sapiente, qui neque omnis fugit assumenda ex a velit
          enim exercitationem sequi numquam delectus quasi quam tempore suscipit
          aliquid ut at tempora cum mollitia perspiciatis corporis. Atque
          asperiores libero quas quaerat, error cum quae laborum ipsum nostrum
          esse temporibus eaque culpa consequatur quisquam quibusdam dolore
          aliquam sapiente autem! Praesentium fugit beatae molestiae repellat
          animi rem ut possimus nesciunt consectetur illo quam voluptas,
          dignissimos saepe accusamus corrupti adipisci aliquid inventore non
          tenetur deleniti commodi quo minus! Minus modi veniam assumenda
          accusamus eaque cumque accusantium molestias similique ipsam veritatis
          possimus nam ea, hic aperiam ut, molestiae perferendis tempora
          mollitia vel doloremque eum odio atque sed doloribus! Et corrupti
          voluptatibus, animi delectus quae placeat perspiciatis ab ex
          praesentium odio debitis vitae sequi excepturi facere officia
          aspernatur? Sint deserunt id dolorum quisquam fuga beatae obcaecati
          nam at voluptatibus itaque esse, ipsam culpa aliquam omnis quibusdam
          similique tempore ratione atque aspernatur, sapiente laboriosam. Nemo
          unde expedita, ex praesentium perspiciatis vero molestiae quo? Optio
          culpa cupiditate excepturi mollitia similique, eaque ullam nisi
          labore. Ex maxime odit esse ullam, libero quod provident, soluta
          architecto explicabo aliquid tempore reprehenderit vitae quis officiis
          pariatur, atque iure velit assumenda molestias labore similique
          nesciunt. Rerum minima dicta eligendi quibusdam culpa quae? Aliquid
          nobis minus eius incidunt amet illum veniam nemo tempora odit quisquam
          dolore iste inventore sed, quidem beatae earum ab architecto. Ullam
          quos consectetur repellendus modi quod earum dolore itaque! Quo nihil
          deleniti corporis! Nesciunt totam in aliquam quae animi nemo nostrum
          dolore inventore dolores culpa ratione officiis explicabo amet dolor
          soluta ipsam ducimus voluptatum numquam, reiciendis debitis delectus
          quos provident iure molestiae? Debitis soluta nemo, maiores vero eaque
          sequi! Eum?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
