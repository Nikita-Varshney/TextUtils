import React from "react";

export default function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div className="" style={{height:"50px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show border border-success`}role="alert" style={{width:"30%" , height:"40px" , display:"flex", justifyContent:"center", alignItems:"center",margin:" 0px 946px"}}>
      <strong >{capitalize(props.alert.type)} : - </strong>{props.alert.msg}
    </div>}
    </div>
  );
}
