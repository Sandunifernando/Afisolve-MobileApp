import * as React from 'react';
import { DataTable } from 'react-native-paper';

const ComplaintHistory = ({navigation}) => (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Product</DataTable.Title>
        <DataTable.Title numeric>Description</DataTable.Title>
        <DataTable.Title numeric>Action</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>e-School</DataTable.Cell>
        <DataTable.Cell numeric>Error on front</DataTable.Cell>
        <DataTable.Cell numeric>GO</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Insta-App</DataTable.Cell>
        <DataTable.Cell numeric>Report on time</DataTable.Cell>
        <DataTable.Cell numeric>GO</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
      />
    </DataTable>
);

export default ComplaintHistory;
