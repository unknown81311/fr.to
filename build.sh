# First, increment the version
git config user.name "GoCD Automation"
git config user.email "no-reply@dotglitch.dev"

npm version patch
version=$(npm version --json | jq '."fr.to"' | tr -d '"')

# Run the build
npm i
npm run build
docker build . -t harbor.dotglitch.dev/library/fr-to:$version

# Once built, push the new build number
git add package.json
git commit -m "Bump version"
git push

# Push the new docker image
docker push harbor.dotglitch.dev/library/fr-to:$version

# Inject the version number into the deployment files
sed -i -e "s/:latest/:$version/g" k3s.yml
sed -i -e "s/:latest/:$version/g" k3s.prod.yml
