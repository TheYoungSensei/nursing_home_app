/* eslint-disable no-undef,no-plusplus */
import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import styles         from './infirmierTable.scss';
import { Table, Button } from 'antd';
import {Link} from 'react-router-dom';

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

  fillTable = (infirmiers) =>{
    const { data }  = this.state;
    const infirmierTable = [];

    if(infirmiers.length === 0 || data.length !== 0)      {
      return;
    }

    infirmiers.map((infirmier)=>{
      infirmierTable.push({
        fullInfirmier: infirmier,
        name: infirmier.lastName+' '+infirmier.firstName,
        email: infirmier.email,
        phone: infirmier.phone,
        languages: infirmier.languages,
        displayLanguages: infirmier.languages.join(', '),
        numberLanguages: infirmier.languages.length,
        sexe: this.getGender(infirmier.sexe),
        adresses: infirmier.zone,
        displayAdresses: infirmier.zone.map((zone) => zone.adress).join(', '),
        numberAdresses: infirmier.zone.length,
        postCodes: infirmier.zone,
        displayPostCodes: infirmier.zone.map((zone) => zone.postCode).join(', '),
        numberPostCodes: infirmier.zone.length,
        specificity: infirmier.specificity,
        dayAvailability: infirmier.availability.dayTimes,
        displayDayAvailability: infirmier.availability.dayTimes.join(', '),
        numberDayAvailability: infirmier.availability.dayTimes.length,
        weekAvailability: infirmier.availability.weekTimes,
        displayWeekAvailability: infirmier.availability.weekTimes.join(', '),
        numberWeekAvailability: infirmier.availability.weekTimes.length
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
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      width: 150
    }, {
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
      width: 150
    }, {
      title: 'Spécialité',
      dataIndex: 'specificity',
      key: 'specificity',
      sorter: (a, b) => a.specificity.localeCompare(b.specificity),
      sortOrder: sortedInfo.columnKey === 'specificity' && sortedInfo.order,
      width: 100
    }, {
      title: 'Zone',
      dataIndex: 'displayAdresses',
      key: 'adresses',
      sorter: (a, b) => a.adresses.length > b.adresses.length,
      sortOrder: sortedInfo.columnKey === 'adresses' && sortedInfo.order,
      width: 100
    }, {
      title: 'Code postal',
      dataIndex: 'displayPostCodes',
      key: 'postCodes',
      sorter: (a, b) => a.numberPostCodes > b.numberPostCodes,
      sortOrder: sortedInfo.columnKey === 'adresses' && sortedInfo.order,
      width: 100
    }, {
      title: 'Genre',
      dataIndex: 'sexe',
      key: 'sexe',
      sorter: (a, b) => a.sexe > b.sexe,
      sortOrder: sortedInfo.columnKey === 'sexe' && sortedInfo.order,
      width: 100
    }, {
      title: 'Langage',
      dataIndex: 'displayLanguages',
      key: 'languages',
      filters: this.props.languages,
      filteredValue: filteredInfo.languages || null,
      onFilter: (value, record) => record.languages.includes(value),
      sorter: (a, b) => a.numberLanguages > b.numberLanguages,
      sortOrder: sortedInfo.columnKey === 'languages' && sortedInfo.order,
      width: 100
    }, {
      title: 'Téléphone',
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      sortOrder: sortedInfo.columnKey === 'phone' && sortedInfo.order,
      width: 100
    }, {
      title: 'Disponibilités en journée',
      dataIndex: 'displayDayAvailability',
      key: 'dayAvailability',
      filters: [
        { text: 'Matin', value: 'Matin' },
        { text: 'Midi', value: 'Midi' },
        { text: 'Soir', value: 'Soir' }
      ],
      filteredValue: filteredInfo.dayAvailability || null,
      onFilter: (value, record) => record.dayAvailability.includes(value),
      sorter: (a, b) => a.numberDayAvailability > b.numberDayAvailability,
      sortOrder: sortedInfo.columnKey === 'dayAvailability' && sortedInfo.order,
      width: 100
    }, {
      title: 'Disponibilités en semaine',
      dataIndex: 'displayWeekAvailability',
      key: 'weekAvailability',
      filters: [
        { text: 'Lundi', value: 'Lundi' },
        { text: 'Mardi', value: 'Mardi' },
        { text: 'Mercredi', value: 'Mercredi' },
        { text: 'Jeudi', value: 'Jeudi' },
        { text: 'Vendredi', value: 'Vendredi' },
        { text: 'Samedi', value: 'Samedi' },
        { text: 'Dimanche', value: 'Dimanche' }
      ],
      filteredValue: filteredInfo.weekAvailability || null,
      onFilter: (value, record) => record.weekAvailability.includes(value),
      sorter: (a, b) => a.numberWeekAvailability > b.numberWeekAvailability,
      sortOrder: sortedInfo.columnKey === 'weekAvailability' && sortedInfo.order,
      width: 100
    }];


    // expandedRowRender={record => <p style={{ margin: 0 }}>{<InfirmierViewer infirmier={record.fullInfirmier}/>}</p>}
    // This has been removed because we would like to toggle everything or nothing.
    return (
      <div>
        <Table
          rowKey={(row) => {
            return row.name;
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
      </div>
    );
  }
}

export default InfirmierTable;
