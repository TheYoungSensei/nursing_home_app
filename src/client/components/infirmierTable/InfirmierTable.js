//@flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import styles         from './infirmierTable.scss';
import {Table, Icon, Button, Input, Select} from 'antd';
import InfirmierViewer from './infirmierViewer/InfirmierViewer';
import {notification} from "antd/lib/index";

class InfirmierTable extends PureComponent {

  static propTypes = {
    infirmiers: PropTypes.array.isRequired
  };

  state={
    data:[],
    dataReadOnly:[],
    sortedInfo:{},
    filteredInfo:{},
    searchText:'',
    filterDropdownVisible: false,
    filtered: false,

    listOptionUser: []
  };

  componentDidUpdate() {
    const { infirmiers }  = this.props;

    this.fillTable(infirmiers);
  }

  componentWillMount() {
    const { infirmiers }  = this.props;

    this.fillTable(infirmiers);
  };

  openErrorNotification = (comment, description) => {
    notification.error({
      message: comment,
      description: description
    });
  };

  openErrorNotificationWithDescription = (comment, description) => {
    notification.error({
      message: comment,
      description: description
    });
  };

  openSuccessNotification = (comment) => {
    notification.success({
      message: comment
    });
  };


  fillTable = (infirmiers) =>{
    const { data }  = this.state;
    const infirmierTable = [];

    if(infirmiers.length === 0 || data.length !== 0)
      return;
    console.log(infirmiers);
    infirmiers.map((infirmier)=>{
        infirmierTable.push({
          name: infirmier.lastName+' '+infirmier.firstName,
          email: infirmier.email
        });
    });

    this.setState({data:infirmierTable.slice(0), dataReadOnly:infirmierTable.slice(0)});
  };

  /*
   * HANDLE CHANGE
   */
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  onSearch = () => {
    const { searchText, dataReadOnly } = this.state;
    const reg = new RegExp(searchText, 'gi');

    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: dataReadOnly.map((record) => {
        const match = record.nom.match(reg);

        if (!match)
          return null;

        return {
          ...record,
          nom: (
            <span>
              {record.nom.split(reg).map((text, i) => (
                i > 0 ? [<span className={styles.highlight}>{match[0]}</span>, text] : text
              ))}
            </span>
          )
        };
      }).filter(record => !!record)
    });
  };

  /*
   * RENDER
   */
  render() {
    const { sortedInfo, filteredInfo, data } = this.state;

    const columns = [ {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      filters: [
        { text: 'gmail', value: 'gmail' }
      ],
      filteredValue: filteredInfo.email || null,
      onFilter: (value, record) => record.email.includes(value),
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
      width: 100
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      width: 250
    } ];

    return (
      <div>
        <Table scroll={{ x: 1300 }} columns={columns} dataSource={data} expandedRowRender={record => <p style={{ margin: 0 }}>"Nothing here"</p>} onChange={this.handleChange}/>
      </div>
    );
  }
}
export default InfirmierTable
