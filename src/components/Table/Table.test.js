import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ThemeProvider from '../ThemeProvider';
import Table from '../Table';
import theme from '../../theme';

const mockCallBack = jest.fn();

const floorplans = [
  {
    id: '1',
    name: '1 Bedroom',
    price: '200',
    beds: '1',
    baths: '1',
    square_footage: '1400',
    onRowClick: mockCallBack
  },
  {
    id: '2',
    name: 'Studio',
    price: '300',
    beds: '0',
    baths: '1',
    square_footage: '900',
    onRowClick: mockCallBack
  },
  {
    id: '3',
    name: '1c',
    price: '0',
    beds: '',
    baths: '',
    square_footage: '1500',
    onRowClick: mockCallBack
  },
  {
    id: '4',
    name: '2a',
    price: '1000',
    beds: '11',
    baths: '11',
    square_footage: '3000',
    onRowClick: mockCallBack
  },
  {
    id: '5',
    name: '2b',
    price: '3000',
    beds: '2',
    baths: '11',
    square_footage: '987',
    onRowClick: mockCallBack
  },
  {
    id: '6',
    name: '3a',
    price: '4400',
    beds: '3',
    baths: '3',
    square_footage: '15000',
    onRowClick: mockCallBack
  }
];

const rows = floorplans.map(f => {
  return {
    ...f,
    price: `$${f.price}`,
    square_footage: `${f.square_footage}ft&sup2;`
  };
});

describe('<Table />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <Table
          rows={rows}
          headers={[
            'Name',
            'Price',
            <img key="Beds" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bed.png" />,
            <img key="Baths" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bath.png" />,
            <img
              key="Square feet"
              width="50"
              src="https://afito-production-bucket.s3.amazonaws.com/static/icons/area.png"
            />
          ]}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('executes the onRowClick function on row click', () => {
    const table = mount(
      <ThemeProvider theme={theme}>
        <Table
          rows={rows}
          headers={[
            'Name',
            'Price',
            <img key="Beds" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bed.png" />,
            <img key="Baths" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bath.png" />,
            <img
              key="Square feet"
              width="50"
              src="https://afito-production-bucket.s3.amazonaws.com/static/icons/area.png"
            />
          ]}
        />
      </ThemeProvider>
    );

    table
      .find('tbody tr')
      .first()
      .simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('has ascending/descending sortable headers', () => {
    const table = mount(
      <ThemeProvider theme={theme}>
        <Table
          sortable
          rows={rows}
          headers={[
            'Name',
            'Price',
            <img key="Beds" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bed.png" />,
            <img key="Baths" width="50" src="https://afito-production-bucket.s3.amazonaws.com/static/icons/bath.png" />,
            <img
              key="Square feet"
              width="50"
              src="https://afito-production-bucket.s3.amazonaws.com/static/icons/area.png"
            />
          ]}
        />
      </ThemeProvider>
    );

    table
      .find('th')
      .first()
      .simulate('click');

    expect(
      table
        .find('tbody tr')
        .first()
        .find('td')
        .first()
        .text()
    ).toBe('Studio');

    table
      .find('th')
      .first()
      .simulate('click');

    expect(
      table
        .find('tbody tr')
        .first()
        .find('td')
        .first()
        .text()
    ).toBe('1 Bedroom');
  });
});
