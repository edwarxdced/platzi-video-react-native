import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';


const makeHTML = (id) => {
  return (`
    <style>
      .video {
        position: relative;
        padding-bottom: 56.25%;
      }
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  `)
}



function Details(props) {
    let starts = [];
    for (var i = 0; i < 10; i++) {
      if (i < props.rating ) {
        if (parseInt(props.rating) == i && i < props.rating) {
          starts.push(<Icon key={i.toString()} name="star-half-o" size={25} color="#f3c624" style={styles.icon}/>)
        } else {
          starts.push(<Icon key={i.toString()} name="star" size={25} color="#f3c624" style={styles.icon}/>)
        }
      } else {
        starts.push(<Icon key={i.toString()} name="star-o" size={25} color="#f3c624" style={styles.icon}/>)
      }
    }

    return (
       <ScrollView>
	      <View style={styles.top}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>
            {starts}
          </Text>

	        <View style={styles.detailsContainer}>
           <View style={styles.staticsConatiner} >
              <Icon name="thumbs-up" size={30} color="#9d9d9d" style={styles.icon} />
              <Text>
                {props.like_count}
              </Text>
           </View >

           <View style={styles.staticsConatiner} >
              <Icon name="thumbs-down" size={30} color="#9d9d9d" style={styles.icon}/>
              <Text>
                0
              </Text>
           </View>

           <View style={styles.staticsConatiner} >
              <Icon name="download" size={30} color="#9d9d9d" style={styles.icon}/>
              <Text>
                {props.download_count}
              </Text>
           </View>

           <View style={styles.staticsConatiner} >
              <Icon name="share" size={30} color="#9d9d9d" style={styles.icon}/>
              <Text>
                Compartir
              </Text>
           </View>

          </View>
	      </View>
	      <View style={styles.bottom}>
	        <View style={styles.details}>
	          <Image
	            style={styles.cover}
	            source={{ uri: props.medium_cover_image }}
	          />
	          <Text style={styles.description}>{props.description_full}</Text>
	        </View>
	      </View>
	      <View style={styles.trailer}>
	        	<WebView
					source={{
						uri:`https://www.youtube.com/embed/${props.yt_trailer_code}`
					}}
				/>
	      </View>

	    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
  },
  detailsContainer:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection: 'row',
  },
  staticsConatiner:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    marginTop: 10
  },
  icon:{

  },
  trailer: {
    height: 200,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cover: {
    width: 125,
    height: 190,
  },
  title: {
    fontSize:18,
    color: '#000000',
    fontWeight: 'bold'
  },
  subtitle:{
    fontSize: 14,
    color: '#4c4c4c',
    flex: 1,
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  bottom: {
    padding: 20,
    flex: 1,
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1,
  }
})

export default Details;