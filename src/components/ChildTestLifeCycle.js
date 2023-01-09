/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

class ChildTestLifeCycle extends Component {
  constructor(props){
    console.log("constructor child")
    super(props)
    this.state = {
      countChild: 0
    }
    // Hàm này Thực hiện việc thiết lập state cho component
    // Việc sử dụng super(props) là để có thể sử dụng this.props trong phạm vi hàm constructor này
  }
  
  componentWillMount() {
    console.log("componentWillMount child")
    // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất
    
  }
  componentDidMount() {
    console.log("componentDidMount child")
    // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất
    // Hàm này rất hữu dụng khi bạn làm việc thêm với Map, bởi vì map chỉ render được 
    // khi có node (id) trong DOM  
    // Nói tóm lại, hàm này được gọi để thông báo component đã tồn tại trên DOM, 
    // từ đó các thao tác trên DOM sẽ có thể thực hiện bình thường đối với component này
  }
  componentWillUnmount() {
    console.log("componentWillUnmount child")
    // Hàm này thực hiện một lần duy nhất, khi component sẽ unmount
    // Hàm này hữu dụng khi bạn cần xoá các timer không còn sử dụng
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps child')
    // Hàm này thực hiện liên tục mỗi khi props thay đổi
    // (1) Sử dụng để thay đổi trạng thái (state) của component phụ thuộc props
    // (2) Sử dụng các kết quả, khởi tạo biến có tính chất async. Ví dụ: Khởi tạo Google Map Api, đây là quá trình async,
    // do vậy, bạn không thể biết được khi nào khởi tạo xong, thì khi khởi tạo xong có thể truyền xuống component thông qua
    // props, và từ đó bạn có thể khởi tạo các dịch vụ khác.
    // Code mẫu:
    //# if(nextProps.mapLoaded){ //props.mapLoaded khởi tạo false
    //#     let googleMaps = this.props.googleMaps ||
    //#         (window.google && // eslint-disable-line no-extra-parens
    //#         window.google.maps) ||
    //#         this.googleMaps;
 
    //#     if (!googleMaps) {
    //#         console.error(// eslint-disable-line no-console
    //#          'Google map api was not found in the page.');
    //#         return;
    //#     }
    //#     this.googleMaps = googleMaps;
 
    //#     this.autocompleteService = new googleMaps.places.AutocompleteService();
    //#     this.geocoder = new googleMaps.Geocoder();
    //# } 
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate child")
    // Hàm này thực hiện khi state và props thay đổi
    // Hàm này sẽ trả về kết quả true/false, bạn sẽ cần sử dụng đến hàm này để xử lý xem có cần update component không
    return true
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate child")
    // Hàm này thực hiện dựa vào kết quả của hàm trên (shouldComponentUpdate)
    // Nếu hàm trên trả về false, thì React sẽ không gọi hàm này
  }  
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate child")
    // Hàm này thực hiện sau khi component được render lại, từ kết quả của componentWillUpdate
  }

  activateLasersChild = () => {
    console.log("Có sự thay đổi State child")
    this.setState({
      countChild: this.state.countChild + 1
    })
  }
  
  render() {
    console.log("render child")
    return (
      <div>
        <h1>--------------------------------</h1>
       <h1>COUNT CHILD:  {this.props.dataFromParent}</h1>
       <button type="button" className="btn btn-primary" onClick={this.activateLasersChild}>Primary Child</button>
      </div>
    );
  }
}

ChildTestLifeCycle.propTypes = {
  //Khai báo kiểu biến cho props
};
ChildTestLifeCycle.defaultProps = {
  //Khai báo giá trị mặc định cho props
}

export default ChildTestLifeCycle;
