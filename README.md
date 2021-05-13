# Mermaid
mattermost mermaidjs plugin

This plugin expects to receive a message from outside MM with the payload of the markdown. Something like this:

```
 'response_type' => 'in_channel',
 'attachments' => array(array(
	'color' => getMMMsgColor('blue'),
	'title' => $q['title'],
)),
'props' => array('mermaidData'=>markdown here),
```

we are using it from a chatbot

the chartjs plugin is the same:

```
'response_type' => 'in_channel',
'attachments' => array(array(
	'color' => getMMMsgColor('blue'),
	'title' => $q['title'],
)),
'props' => array('chartdata'=>chartjs data here)),
```

we are doing this from [coreBOS](https://github.com/tsolucio/corebos) with [this extension](https://github.com/tsolucio/chatwithme)
