
cd ../../../../
current_dir=$(pwd)

#$2 = [Insider]
#$1 = [prod]

echo $current_dir

if [ "$2" == 'Insider' ]
then
	echo "Running Insider test script"
	mvn clean verify -Denv.Url=$1 -Dcucumber.options="$current_dir/src/test/resources/features/InsiderApiSuite" serenity:aggregate

fi