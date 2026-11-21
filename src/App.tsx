/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const SITE_ASSET_PATH =
  '/assets/aistudio/Glacetor_Remedies_Pvt._Ltd.___Science-led_Pharmaceuticals_9247fd5d.html';

export default function App() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-white">
      <iframe
        src={SITE_ASSET_PATH}
        title="Glacetor Remedies Pvt. Ltd. | Science-led Pharmaceuticals"
        referrerPolicy="strict-origin-when-cross-origin"
        className="block h-full w-full border-0"
      />
    </main>
  );
}
