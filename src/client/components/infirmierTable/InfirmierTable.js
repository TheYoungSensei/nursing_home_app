//@flow weak
/*
TODO : All fields with clean order
       Randomize order
       All params to infirmierViewer + clean display
       Replace sexe int by picture
 */
import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import styles         from './infirmierTable.scss';
import {Table} from 'antd';
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

  get_gender = (gender) => {
    if (gender === 0){
      return 'Homme'
    } else if(gender === 1){
      return 'Femme'
    }
  };

  fillTable = (infirmiers) =>{
    const { data }  = this.state;
    const infirmierTable = [];

    if(infirmiers.length === 0 || data.length !== 0)
      return;

    infirmiers.map((infirmier)=>{
        infirmierTable.push({
          fullInfirmier: infirmier,
          name: infirmier.lastName+' '+infirmier.firstName,
          email: infirmier.email,
          phone: infirmier.phone,
          languages: infirmier.languages,
          display_languages: infirmier.languages.join(', '),
          number_languages: infirmier.languages.length,
          sexe: this.get_gender(infirmier.sexe),
          zones: infirmier.zone,
          display_zones: infirmier.zone.join(', '),
          number_zones: infirmier.zone.length,
          postCodes: infirmier.postCodes,
          display_postCodes: infirmier.postCodes.join(', '),
          number_postCodes: infirmier.postCodes.length,
          specificity: infirmier.specificity,
          day_availability: infirmier.availability.dayTimes,
          display_day_availability: infirmier.availability.dayTimes.join(', '),
          number_day_availability: infirmier.availability.dayTimes.length,
          week_availability: infirmier.availability.weekTimes,
          display_week_availability: infirmier.availability.weekTimes.join(', '),
          number_week_availability: infirmier.availability.weekTimes.length
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
      dataIndex: 'display_zones',
      key: 'zones',
      sorter: (a, b) => a.zones.length > b.zones.length,
      sortOrder: sortedInfo.columnKey === 'zones' && sortedInfo.order,
      width: 100
    }, {
      title: 'Code postal',
      dataIndex: 'display_postCodes',
      key: 'postCodes',
      sorter: (a, b) => a.number_postCodes > b.number_postCodes,
      sortOrder: sortedInfo.columnKey === 'postCodes' && sortedInfo.order,
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
      dataIndex: 'display_languages',
      key: 'languages',
      filters: [
        { text: 'Français', value: 'Français' },
        { text: 'Anglais', value: 'Anglais' }
      ],
      filteredValue: filteredInfo.languages || null,
      onFilter: (value, record) => record.languages.includes(value),
      sorter: (a, b) => a.number_languages > b.number_languages,
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
      dataIndex: 'display_day_availability',
      key: 'day_availability',
      filters: [
        { text: 'Matin', value: 'Matin' },
        { text: 'Midi', value: 'Midi' },
        { text: 'Soir', value: 'Soir' }
      ],
      filteredValue: filteredInfo.day_availability || null,
      onFilter: (value, record) => record.day_availability.includes(value),
      sorter: (a, b) => a.number_day_availability > b.number_day_availability,
      sortOrder: sortedInfo.columnKey === 'day_availability' && sortedInfo.order,
      width: 100
    }, {
      title: 'Disponibilités en semaine',
      dataIndex: 'display_week_availability',
      key: 'week_availability',
      filters: [
        { text: 'Lundi', value: 'Lundi' },
        { text: 'Mardi', value: 'Mardi' },
        { text: 'Mercredi', value: 'Mercredi' },
        { text: 'Jeudi', value: 'Jeudi' },
        { text: 'Vendredi', value: 'Vendredi' },
        { text: 'Samedi', value: 'Samedi' },
        { text: 'Dimanche', value: 'Dimanche' }
      ],
      filteredValue: filteredInfo.week_availability || null,
      onFilter: (value, record) => record.week_availability.includes(value),
      sorter: (a, b) => a.number_week_availability > b.number_week_availability,
      sortOrder: sortedInfo.columnKey === 'week_availability' && sortedInfo.order,
      width: 100
    }];


    // expandedRowRender={record => <p style={{ margin: 0 }}>{<InfirmierViewer infirmier={record.fullInfirmier}/>}</p>}
    // This has been removed because we would like to toggle everything or nothing.
    return (
      <div>
        <Table scroll={{ x: 1300 }} columns={columns} dataSource={data} onChange={this.handleChange}/>
      </div>
    );
  }
}
export default InfirmierTable
