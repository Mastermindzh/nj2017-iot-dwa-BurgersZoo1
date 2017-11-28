import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import style from '../styles/style';

class TableComponent extends Component {

  render() {

    const { classes, headers, data } = this.props;

    return (
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {headers.map(header => {
                return (
                  <TableCell numeric={header.numeric} key={header.text}>{header.text}</TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key="">
                  {n.map(item => {
                    return <TableCell numeric={item.numeric}>{item.children}</TableCell>;
                  })
                  }
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}

export default withStyles(style, { withTheme: true })(TableComponent);
