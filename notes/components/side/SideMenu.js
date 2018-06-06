import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import { styles } from '../../Styles';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    // const navigateAction = NavigationActions.navigate({
    //   routeName: route
    // });
    // this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.containerSide}>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                Page2
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Page3
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;