/* eslint-disable no-undef,no-plusplus */
import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import styles         from './infirmierTable.scss';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

class InfirmierTable extends PureComponent {

  static propTypes = {
    infirmiers: PropTypes.array.isRequired,
    languages: PropTypes.array.isRequired,
    newSearch: PropTypes.func.isRequired
  };

  state = {
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
  }
  getGender = (gender) => {
    if (gender === 0) {
      return 'Homme';
    } else if(gender === 1) {
      return 'Femme';
    } else {
      return 'Unknown';
    }
  };

  printPage = () => {
  window.print()
  }


  fillTable = (infirmiers) =>{
    const { data }  = this.state;
    const infirmierTable = [];

    if(infirmiers.length === 0 || data.length !== 0)      {
      return;
    }

    infirmiers.map((infirmier)=>{
      infirmierTable.push({
        fullInfirmier: infirmier,
        lastName: infirmier.lastName,
        firstName: infirmier.firstName,
        email: infirmier.email,
        phone: infirmier.phone
      });
    });

    // Shuffle infirmierTable

    for (let i = infirmierTable.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [infirmierTable[i], infirmierTable[j]] = [infirmierTable[j], infirmierTable[i]];
    }

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

        if (!match)          {
          return null;
        }

        return {
          ...record,
          nom: (
            <span>
              {record.nom.split(reg).map((text, i) => (
                i > 0 ? [<span key={i} className={styles.highlight}>{match[0]}</span>, text] : text
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
      title: 'Nom',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      sortOrder: sortedInfo.columnKey === 'lastName' && sortedInfo.order,
      width: 150
    }, {
      title: 'Prénom',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortOrder: sortedInfo.columnKey === 'firstName' && sortedInfo.order,
      width: 150
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
      width: 150
    }, {
      title: 'Téléphone',
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      sortOrder: sortedInfo.columnKey === 'phone' && sortedInfo.order,
      width: 100
    }];


    // expandedRowRender={record => <p style={{ margin: 0 }}>{<InfirmierViewer infirmier={record.fullInfirmier}/>}</p>}
    // This has been removed because we would like to toggle everything or nothing.
    return (
      <div>
        <Table
          rowKey={(row) => {
            return row.email;
          }}
          scroll={{ x: 1300 }}
          className={styles.myTable}
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
          footer={() => {
            return (
              <Button
                type="primary"
                onClick={this.props.newSearch}
              >
                <Link to="/search">
                  <span>Nouvelle Recherche</span>
                </Link>
              </Button>
            );
          }}
        />

        <Button
          type="primary"
          onClick={this.printPage}
        >Imprimer</Button>
      </div>
    );
  }
}

export default InfirmierTable;
