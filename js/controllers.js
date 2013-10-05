function NoticiasList($scope)
{
    $scope.news = [{ "titular": "Nunc tincidunt magna elit", "fecha": "2013/10/04 20:30.42", "resumen": "Nunc tincidunt magna elit, ac accumsan urna porta eu. Sed egestas, metus in tincidunt pulvinar, libero lectus hendrerit risus, ac condimentum lectus lacus in justo." },
                   { "titular": "Neque porro quisquam", "fecha": "2013/10/04 20:30.45", "resumen": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...." },
                   { "titular": "Lorem ipsum dolor sit amet", "fecha": "2013/10/03 10:30.45", "resumen": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus nisi et neque aliquam ullamcorper. Nunc ante nisi, ultrices non velit vitae, rhoncus tincidunt leo. Nunc quis dui vel quam suscipit semper vel in enim. Nam et dolor nisi. Nam aliquet nunc enim, vel rhoncus est tincidunt a. Fusce id luctus eros. Sed ultrices lacus sit amet ipsum ornare, at egestas nisl cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque a massa a elit feugiat auctor et sit amet orci." },
                   { "titular": "Nulla mattis rutrum neque", "fecha": "2013/10/03 11:32.25", "resumen": "Nulla mattis rutrum neque, vel viverra eros sollicitudin placerat. Proin feugiat lacus nec volutpat.." }];
    $scope.orderProp = "industria";
    $scope.titular = "Noticias del Dia";
}
