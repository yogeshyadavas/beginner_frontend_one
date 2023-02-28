import React from "react";

const Card = () => {
  return (
    <>
      <div className="flex">
        <div>
          <img
            src="https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy"
            alt="Avatar"
            width={200}
            height={200}
          />
        </div>
        <div className="bg-blue-300">
          <h2>Leanne Graham</h2>
          <p>
            <strong>Email: </strong>Sincere@april.biz
          </p>
          <p>
            <strong>Phone: </strong>1-770-736-8031 x56442
          </p>
          <p>
            <strong>Company: </strong>Romaguera-Crona
          </p>
          <p>
            <strong>Website: </strong>hildegard.org
          </p>
          <p>
            <strong>Address: </strong>Kulas Light, Apt. 556, Gwenborough,
            92998-3874
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
